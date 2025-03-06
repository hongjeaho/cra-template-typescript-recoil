import { atom, selector, useSetRecoilState } from 'recoil'

interface alertMessagePropps {
  message?: string | null
  onCallBack?: () => void
}

export const alertMessageState = atom<alertMessagePropps>({
  key: 'alertMessage',
  default: { message: null },
})

export const alertMessagSelector = selector<string | null>({
  key: 'alertMessagSelector',
  get: ({ get }) => {
    const message = get(alertMessageState)
    return message.message ?? null
  },
})

export const useShowAlertMessage = () => {
  const setAlertMessage = useSetRecoilState(alertMessageState)

  const updateMessage = (newMessage: string) => {
    setAlertMessage(prevState => ({
      ...prevState, // 기존 상태를 유지하면서
      message: newMessage, // message만 새로 갱신
    }))
  }

  return updateMessage
}

export const useAlertMessage = () => {
  const setAlertMessage = useSetRecoilState(alertMessageState)

  const alertMessage = (message: string, onCallBack: () => void) => {
    setAlertMessage(() => ({
      message,
      onCallBack,
    }))
  }

  return alertMessage
}
