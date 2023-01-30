const BASE_API_URL = "http://localhost:8000"

async function getAllFeedback() {
  const response = await fetch(`${BASE_API_URL}`)
  return await response.json()
}

export default {
  getAllFeedback,
}
