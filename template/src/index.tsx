import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import AlertMessage from './commonComponents/message/AlertMessage'
import reportWebVitals from './reportWebVitals'
import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root')!)
const queryClient = new QueryClient()

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <AlertMessage />
    </QueryClientProvider>
  </RecoilRoot>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
