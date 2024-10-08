export const schema = gql`
  type ClientBusiness {
    id: String!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    workplaces: [Workplace]!
    createdBy: User!
    userId: String!
  }

  type Query {
    clientBusinesses: [ClientBusiness!]! @requireAuth
    clientBusiness(id: String!): ClientBusiness @requireAuth
  }

  input CreateClientBusinessInput {
    name: String!
    userId: String!
  }
  input CreateClientBusinessWithWorkplaceInput {
    businessName: String!
    userId: String!
    street: String!
    houseNumber: String!
    houseNumberAddition: String
    city: String!
    postalCode: String!
  }

  input UpdateClientBusinessInput {
    name: String
    userId: String
  }

  type Mutation {
    createClientBusiness(input: CreateClientBusinessInput!): ClientBusiness!
      @requireAuth
    createClientBusinessWithWorkplace(
      input: CreateClientBusinessWithWorkplaceInput!
    ): ClientBusiness! @requireAuth
    updateClientBusiness(
      id: String!
      input: UpdateClientBusinessInput!
    ): ClientBusiness! @requireAuth
    deleteClientBusiness(id: String!): ClientBusiness! @requireAuth
  }
`
