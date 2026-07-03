class Infrastructure {
  constructor(provider, resource, configuration) {
    this.provider = provider;
    this.resource = resource;
    this.configuration = configuration;
  }
  static async getAll() {
    // Implement database logic to fetch all infrastructure
    return [];
  }
  static async create(data) {
    // Implement database logic to create new infrastructure
    return data;
  }
}
module.exports = Infrastructure;