import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/features/stores/hooks'

interface Props {
  children: React.ReactNode
}

const PrivateLayout: React.FC<Props> = ({ children }) => {
  const isLogin = useAppSelector(state => state.customer.isLogin)
  const pageMove = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      alert('접근 권한이 없습니다.')
      pageMove('/')
    }
  }, [isLogin])

  return <>{children}</>
}

export default PrivateLayout
