import http from 'http'
import path from 'path'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
const app = express()
const server = http.createServer(app)
// Express App Config
app.use(cookieParser())
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://localhost:5173'
        ],
        credentials: true
    }
    app.use(cors(corsOptions))
}


import { workBenchRoutes } from './api/workBenchDB/workBench.routes.js'


// routes


app.use('/api', workBenchRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})


import { logger } from './services/logger.service.js'
const port = process.env.PORT || 8080
server.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})