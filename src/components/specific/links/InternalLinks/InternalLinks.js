import React from 'react'
import {Link} from "react-router-dom"
import "./InternalLinks.css"
const InternalLinks = ({to, className, type, size, children}) => {
  return (
    <Link className={`${className} link--${type} link--${size}`} to={to}>{children}</Link>
  )
}

export default InternalLinks