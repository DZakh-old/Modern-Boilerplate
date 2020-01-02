export default class Ajax {
  constructor(url) {
    this.url = url;
  }

  async get(headers = {}) {
    try {
      const res = await fetch(this.url, {
        method: 'GET',
        headers
      });
      const { status } = res;
      if (status !== 200) {
        return { status };
      }
      const data = await res.json();
      return { status, ...data };
    } catch (err) {
      throw new Error(err);
    }
  }

  async post(data = {}) {
    try {
      const res = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      const res = await fetch(this.url + '/' + id);
      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteById(id) {
    try {
      const res = await fetch(this.url + '/' + id, {
        method: 'DELETE'
      });
      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateById(id, data = {}) {
    try {
      const res = await fetch(this.url + '/' + id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  }
}
