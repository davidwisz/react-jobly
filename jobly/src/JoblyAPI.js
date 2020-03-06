import axios from 'axios';

class JoblyAPI {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem('_token');

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    let res = await this.request(`companies/`);

    return res.companies;
  }

  static async searchCompanies(terms) {
    let res = await this.request(`companies/?search=${terms}`);

    return res.companies;
  }

  static async searchJobs(terms) {
    let res = await this.request(`jobs/?search=${terms}`);

    return res.jobs;
  }

  static async getJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  static async login(formData) {
    let res = await this.request(`login/`, formData, 'post');
    return res.token;
  }

  static async register(formData) {
   
    let res = await this.request(`users/`, formData, 'post');

    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user
  }
}

export default JoblyAPI;