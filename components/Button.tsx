"use client"
import { Button } from '@/types'
import React from 'react'

const Button = ({ title, styles, handleClick }: Button) => {
  return (
    <button onClick={handleClick} className={`btn-primary ${styles}`}>{ title }</button>
  )
}

export default Button