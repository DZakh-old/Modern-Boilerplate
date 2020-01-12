export const Ajax = {
  get: async (url, headers = {}) => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers,
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
  },

  post: async (url, data = {}) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  },

  getById: async (url, id) => {
    try {
      const res = await fetch(`${url}/${id}`);

      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteById: async (url, id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });

      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  },

  updateById: async (url, id, data = {}) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  },
};
