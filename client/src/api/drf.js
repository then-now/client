const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  URL: SERVER_URL,
  ROUTES: {
    genre: '/genre/',
    movie: '/movie/',
  }
}