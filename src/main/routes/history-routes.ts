import { adaptRoute } from "@/main/adapters";

import {
  makeAddHistoryController,
  makeUpdateHistoryController
} from '@/main/factories'

import { Router } from "express";
import { auth } from "../middlewares/auth";

export default (router: Router) => {
  router.post('/history', auth, adaptRoute(makeAddHistoryController()));
  router.put('/history', auth, adaptRoute(makeUpdateHistoryController()));
}