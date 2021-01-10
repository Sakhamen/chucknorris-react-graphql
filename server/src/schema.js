const schema = `
  # types
  type Category {
    name: String!
  }

  type Joke {
    value: String!
    icon_url: String!
    category: String
  }


  # queries
  type Query {
    categories: [Category]
    joke(category: String!): Joke
  }
`;


module.exports = schema;
