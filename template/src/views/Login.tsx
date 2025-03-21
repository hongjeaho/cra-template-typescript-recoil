import { userState } from '@/store/user'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const Login: React.FC = () => {
  const setCustomer = useSetRecoilState(userState)

  useEffect(() => {
    setCustomer({ name: 'testName' })
  }, [])

  return <>로그인 되었습니다.</>
}

export default Login
