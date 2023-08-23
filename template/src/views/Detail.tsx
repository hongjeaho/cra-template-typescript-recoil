import React from 'react'
import { useParams } from 'react-router-dom'

const Detail: React.FC = () => {
  const { id } = useParams()

  return <>Detail is id {id}</>
}

export default Detail
