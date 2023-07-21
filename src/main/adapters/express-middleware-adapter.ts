import { Middleware } from '../../presentation/protocols'
import { CustomRequest } from '../../types'

import { Response, NextFunction } from 'express';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    const request = {
      accessToken: req.headers?.['x-access-token'],
      ...(req.headers || {}),
    }
    const httpResponse = await middleware.handle(request)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
