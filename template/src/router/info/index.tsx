import React from 'react'
import Info from '@/views/info/Info'
import PrivateLayout from '@/components/layout/PrivateLayout'

export default [
  {
    path: 'info',
    element: (
      <PrivateLayout>
        <Info />
      </PrivateLayout>
    ),
  },
]
