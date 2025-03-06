import { type PropsWithChildren } from 'react'

interface TabPanelProps extends PropsWithChildren {
  value: number
  index: number
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  if (value !== index) return null

  return <div role="tabPanel">{children}</div>
}

export default TabPanel
