import { io } from 'socket.io-client'

// get FROM ENV !!!!!
const ENDPOINT = `http://localhost:${process.env.PORT || 3000}`

const socket = io(ENDPOINT, { autoConnect: false })

export default socket
