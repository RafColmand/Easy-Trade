import React from 'react'
import "./Message.css"

const Message = ({className, type, size, children}) => {
  return (
    <p className={`${className} text--${type} text--${size}`}>{children}</p>
  )
}

export default Message