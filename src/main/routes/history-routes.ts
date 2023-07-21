import { adaptRoute } from "../adapters";

import {
  makeAddHistoryController,
  makeUpdateHistoryController
} from '../factories'

import { Router } from "express";
import { auth } from "../middlewares/auth";

export default (router: Router) => {
  router.post('/history', auth, adaptRoute(makeAddHistoryController()));
  router.put('/history', auth, adaptRoute(makeUpdateHistoryController()));
}