const { gql } = require('apollo-server-express');

const categoryDefs = gql`
  type Category {
    id: ID!
    name: String!
    subCategories: [SubCategory]
  }

  type SubCategory {
    id: ID!
    name: String!
    categoryId: ID!
    category: Category
  }

  type Query {
    GetCategories: [Category]
  }
`;

export default categoryDefs;