import { AppError } from './AppError'

export class BadRequestError extends AppError {
  status = 400

  constructor(message: string) {
    super(message)
  }
}
