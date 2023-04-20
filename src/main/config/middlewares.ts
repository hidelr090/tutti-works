import { bodyParser, cors, contentType } from "../middlewares"

import { Express } from 'express'

export const setupMiddlewares = (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
