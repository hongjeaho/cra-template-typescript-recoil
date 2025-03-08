import React from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from '@/layout/BaseLayout'
import Home from '@/views/Home'
import info from './info'
import Login from '@/views/Login'
import Detail from '@/views/Detail'

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
        path: '/detail/:id',
        element: <Detail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      ...info,
    ],
  },
]

const options = {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
}

export default createBrowserRouter(router, options)
