import React from 'react'
import Firstchil from './Firstchil'
const Parent = () => {
  return (
    <div>
        <h1>Parent component</h1>
        <Firstchil passData={ count} />
        </div>
  )
}

export default Parent