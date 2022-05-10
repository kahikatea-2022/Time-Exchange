import { io } from 'socket.io-client'

const PORT = 3000

// get FROM ENV !!!!!
const ENDPOINT = `http://localhost:${PORT}`

const socket = io(ENDPOINT, { autoConnect: false })

export default socket
