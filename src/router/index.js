// Composables
import { createRouter, createWebHistory } from 'vue-router'
import dashboardRouter from './page/dashboard-router.js';
import defaultLayoutRouter from './page/default-layout-router.js';
import topNavRouter from './page/top-nav-router.js';
import bottomNav from './page/bottom-nav.js';
import blankPageRouter from './page/blank-page-router.js';
import alertRouter from './page/alert-router.js';
import articleRouter from './page/article-router.js';
import avatarRouter from './page/avatar-router.js';
import bagdeRouter from './page/bagde-router.js';
import carouselRouter from './page/carousel-router.js';
import chatRouter from './page/chat-router.js';
import chartRouter from './page/chart-router.js';
import colorPickerRouter from './page/color-picker-router.js';
import galeryRouter from './page/galery-router.js';
import tabRouter from './page/tab-router.js';
import tableRouter from './page/table-router.js';
import timelineRouter from './page/timeline-router.js';
import standardFormRouter from './page/standard-form-router.js';
import advancedFormRouter from './page/advanced-form-router.js';
import validationRouter from './page/validation-router.js';
import loginRouter from './page/login-router.js';
import registrationRouter from './page/registration-router.js';
import forgetPasswordRouter from './page/forget-password-router.js';
import resetPasswordRouter from './page/reset-password-router.js';
import errorForbiddenRouter from './page/error-forbidden-router.js';
import notFoundRouter from './page/not-found-router.js';
import serverBreakRouter from './page/server-break-router.js';
import serverNotReadyRouter from './page/server-not-ready-router.js';

const routes = [
  ...dashboardRouter,
  ...defaultLayoutRouter,
  ...topNavRouter,
  ...bottomNav,
  ...blankPageRouter,
  ...alertRouter,
  ...articleRouter,
  ...avatarRouter,
  ...bagdeRouter,
  ...carouselRouter,
  ...chatRouter,
  ...chartRouter,
  ...colorPickerRouter,
  ...galeryRouter,
  ...tabRouter,
  ...tableRouter,
  ...timelineRouter,
  ...standardFormRouter,
  ...advancedFormRouter,
  ...validationRouter,
  ...loginRouter,
  ...registrationRouter,
  ...forgetPasswordRouter,
  ...resetPasswordRouter,
  ...errorForbiddenRouter,
  ...notFoundRouter,
  ...serverBreakRouter,
  ...serverNotReadyRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
