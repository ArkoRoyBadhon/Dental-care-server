import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import routes from './app/routes'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import cookieParser from 'cookie-parser'

const app: Application = express()

app.use(
  cors({
    origin: 'https://dental-care-xi.vercel.app',
    // origin: 'http://localhost:5173',
    credentials: true,
  }),
)
// app.use(
//   // 'https://dental-care-xi.vercel.app',
//   // 'http://localhost:5173',
//   "*",
//   cors({
//     origin: true,
//     credentials: true,
//   }),
// )

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Replace this with your logic for checking and allowing trusted origins
//       // const allowedOrigins = ['http://localhost:5173', 'https://dental-care-xi.vercel.app'];
//       const allowedOrigins = ['http://localhost:5173'];

//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true,
//   })
// );

app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:5173',
    'https://dental-care-xi.vercel.app',
  ]

  const origin = req.headers.origin as string
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
  }

  next()
})

// parser
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', routes)

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
