import React from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from '@/components/layout/BaseLayout'
import Home from '@/views/Home'
import Info from '@/views/Info'
import PrivateLayout from '@/components/layout/PrivateLayout'

const router: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'info',
        element: (
          <PrivateLayout>
            <Info />
          </PrivateLayout>
        ),
      },
    ],
  },
]

export default createBrowserRouter(router)
