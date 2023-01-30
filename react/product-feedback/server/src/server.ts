import http from "http"

import app from "./app"

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

function start() {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

start()
