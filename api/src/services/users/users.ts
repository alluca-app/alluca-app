import type {
  MutationResolvers,
  QueryResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { hashPassword } from '@redwoodjs/auth-dbauth-api'
import { ForbiddenError } from '@redwoodjs/graphql-server'

import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  const isUpdatingSelf = id === context.currentUser.id

  if (!isUpdatingSelf) {
    throw new ForbiddenError(
      'U werkt informatie bij voor een ander account. U kunt alleen uw eigen accountinformatie bijwerken.'
    )
  }

  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({ where: { id } })
}

export const updateAvatarUrl: MutationResolvers['updateAvatarUrl'] = ({
  id,
  newAvatarUrl,
}) => {
  const isUpdatingSelf = id === context.currentUser.id

  if (!isUpdatingSelf) {
    throw new ForbiddenError(
      'U werkt informatie bij voor een ander account. U kunt alleen uw eigen accountinformatie bijwerken.'
    )
  }

  return db.user.update({
    data: { avatarUrl: newAvatarUrl },
    where: { id },
  })
}

export const updateUserEmail: MutationResolvers['updateUserEmail'] = ({
  id,
  newEmail,
}) => {
  return db.user.update({
    data: { email: newEmail },
    where: { id },
  })
}

export const updatePassword: MutationResolvers['updatePassword'] = ({
  id,
  newPassword,
}) => {
  requireAuth()

  const [hashedPassword, salt] = hashPassword(newPassword)

  return db.user.update({
    data: {
      hashedPassword,
      salt,
    },
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  workRequest: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).workRequest()
  },
  address: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).address()
  },
  jobProfile: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).jobProfile()
  },
}
