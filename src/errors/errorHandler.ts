import AppError from './appError'
import { NextFunction, Request, Response } from 'express'

export function ErrorRequestHandler (error: Error, req: Request, res: Response, next: NextFunction): Response {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
      status: error.status,
      statusCode: error.statusCode
    })
  }

  console.log(error)

  return res.status(500).json({
    message: 'Internal Server Error',
    status: 'error',
    type: 'unknown',
    statusCode: 500
  })
}
