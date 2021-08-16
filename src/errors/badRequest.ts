import AppError from './appError'

export default class BadRequest extends AppError {
  constructor (parameter: string) {
    super(`Missing parameter: ${parameter}`, 400, 'Bad Request')
  }
}
