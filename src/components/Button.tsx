import React from 'react'

const Button = ({ children }: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div>{children || 'Button Test'}</div>
  )
}

export default Button
