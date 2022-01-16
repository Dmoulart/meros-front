export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  })

  // Inject to context as $api
  inject('api', api)
}
