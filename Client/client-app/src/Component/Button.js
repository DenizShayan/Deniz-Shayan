import React from 'react'
import Button from '@mui/material/Button'

//Butonn instead of Button
export default function Buttonn({color,variant}) {
  return (
    <div><Button variant={variant} color={color}>Text</Button></div>
  )
}