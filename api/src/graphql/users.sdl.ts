export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    roles: [Role]!
    workRequest: [WorkRequest]!
    address: [Address]!
    jobProfile: [JobProfile]!
    firstName: String
    lastName: String
    avatarUrl: String
    # certificate: [Certificate]!
  }

  enum Role {
    CLIENT
    ADMIN
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    firstName: String
    lastName: String
    avatarUrl: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: [Role]!
  }

  input UpdateUserInput {
    email: String
    firstName: String
    lastName: String
    avatarUrl: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: [Role]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    updateAvatarUrl(id: String!, newAvatarUrl: String!): User! @requireAuth
    updateUserEmail(id: String!, newEmail: String!): User! @requireAuth
    updatePassword(id: String!, newPassword: String!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
