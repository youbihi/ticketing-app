import axios from 'axios';

export default {
  user: {
    login: (credentials) =>
      axios.post('/api/auth', { credentials }).then((res) => res.data.user),
    signup: (user) =>
      axios.post('api/users', { user }).then((res) => res.data.user),
    confirm: (token) =>
      axios
        .post('/api/auth/confirmation', { token })
        .then((res) => res.data.user),
    resetPasswordRequest: (email) =>
      axios.post('/api/auth/reset_password_request', { email }),
    validateToken: (token) => axios.post('/api/auth/validate_token', { token }),
    resetPassword: (data) => axios.post('/api/auth/reset_password', { data }),
    updateById: (id, user) => axios.put(`/api/users/${id}`, { user }),
    getById: (id) => axios.get(`/api/users/${id}`),
  },
  ticket: {
    getall: () => axios.get(`/api/tickets`).then((res) => res.data),
    getById: (id) => axios.get(`/api/tickets/${id}`).then((res) => res.data),
    updateById: (id, ticket) =>
      axios.put(`/api/tickets/${id}`, { ticket }).then((res) => res.data),
    create: (ticket) =>
      axios.post('/api/tickets', { ticket }).then((res) => res.data),

    deleteById: (id) =>
      axios.delete(`/api/tickets/${id}`).then((res) => res.data),
  },
  order: {
    getall: () => axios.get(`/api/orders`).then((res) => res.data),
    getById: (id) => axios.get(`/api/orders/${id}`).then((res) => res.data),
    updateById: (id, order) =>
      axios.put(`/api/orders/${id}`, { order }).then((res) => res.data),
    create: (order) =>
      axios.post('/api/orders', { order }).then((res) => res.data),

    deleteById: (id) =>
      axios.delete(`/api/orders/${id}`).then((res) => res.data),
  },
};
