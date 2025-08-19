import React from 'react'

const Modal = ({
  children,
  display,
  close,
}: Readonly<{
  children: React.ReactNode;
  display: boolean;
  close: () => void
}>) => {
  return (
    <div onClick={close} className={`modal ${display ? 'block' : 'hidden'}`}>{children}</div>
  )
}

export default Modal
