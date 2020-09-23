import axios from 'axios';

export default {
  user: {
    login: (credentials) =>
      axios
        .post('/api/users/signin', { credentials })
        .then((res) => res.data.user),
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
  aircraft: {
    getById: (id) =>
      axios.get(`/api/aircrafts/${id}`).then((res) => res.data.aircraft),
    updateById: (id, aircraft) =>
      axios
        .put(`/api/aircrafts/${id}`, { aircraft })
        .then((res) => res.data.aircraft),
    create: (aircraft) =>
      axios
        .post('/api/aircrafts', { aircraft })
        .then((res) => res.data.aircraft),

    deleteById: (id) =>
      axios.delete(`/api/aircrafts/${id}`).then((res) => res.data.aircraft),
  },
};
