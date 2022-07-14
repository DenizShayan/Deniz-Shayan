import React from 'react'
import Button from '@mui/material/Button'

export default function button({color,variant}) {
  return (
    <div><Button variant={variant} color={color}>Text</Button></div>
  )
}