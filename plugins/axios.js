export default function ({ $axios, error: nuxtError }) {
  $axios.onError((error) => {
    if (error.response) {
      nuxtError({
        statusCode: error.response.status,
        message: error.message
      })
    } else {
      nuxtError({
        statusCode: error.status,
        message: error.message
      })
    }

    return Promise.resolve(false)
  })
}
