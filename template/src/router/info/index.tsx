import React from 'react'
import Info from '@/views/info/Info'
import AuthenticationLayout from '@/layout/AuthenticationLayout'

export default [
  {
    path: 'info',
    element: <AuthenticationLayout />,
    Children: [
      {
        path: '',
        element: <Info />,
      },
    ],
  },
]
