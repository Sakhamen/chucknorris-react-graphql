const resolvers = {
  Query: {
    categories: async (_, args, { dataSources }) => {
      return dataSources.jokesAPI.getCategories();
    },
    joke: async (_, { category }, { dataSources }) => {
      return dataSources.jokesAPI.getJoke(category);
    },
  },
};


module.exports = resolvers;
