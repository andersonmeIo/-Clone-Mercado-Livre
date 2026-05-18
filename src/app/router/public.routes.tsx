import { AppLayout } from '../layouts/AppLayout'
import { HomePage } from '../../modules/home/pages/home.routes'

export const publicRoutes = [
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
]