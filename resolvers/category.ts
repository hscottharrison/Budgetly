export default {
  Query: {
    GetCategories: async (parent, args, { models }) => {
      try {
        return await models.Category.find(models);
      } catch (e) {
        return console.log(e);
      }
    }
  }
}