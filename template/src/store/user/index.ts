import { atom, selector } from 'recoil'

import { type AuthUser } from '@/model/authUser'
import { type BasicAuthority } from '@/model/basicAuthority'

import { localStorageEffect } from '../recoilEffect'

export const userState = atom<AuthUser | null>({
  key: 'user',
  default: null,
  effects: [localStorageEffect('user')],
})

export const isLoginSelector = selector<boolean>({
  key: 'isLoginSelector',
  get: ({ get }) => get(userState) !== null,
})

export const userAuthoritySelector = selector<BasicAuthority[]>({
  key: 'userAuthoritySelector',
  get: ({ get }) => {
    const user = get(userState)
    return user?.roles ?? []
  },
})
