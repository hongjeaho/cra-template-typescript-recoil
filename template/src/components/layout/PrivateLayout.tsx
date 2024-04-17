import { type PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLoginSelector } from '@/store/customer'
import { useRecoilValue } from 'recoil'

interface Props extends PropsWithChildren {}

const PrivateLayout: React.FC<Props> = ({ children }) => {
  const pageMove = useNavigate()
  const isLogin = useRecoilValue<boolean>(isLoginSelector)

  useEffect(() => {
    if (!isLogin) {
      alert('접근 권한이 없습니다.')
      pageMove('/')
    }
  }, [isLogin])

  if (!isLogin) {
    return null
  }

  return <div>{children}</div>
}

export default PrivateLayout
