const { RESTDataSource } = require('apollo-datasource-rest');

class JokesDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes';
  }

  async getCategories() {
    const data = await this.get('categories');
    return data.map(name => ({ name }));
  }

  async getJoke(category) {
    const data = await this.get(`random?category=${category}`);
    data.category = data.categories[0];
    return data;
  }

};


module.exports = JokesDataSource;
