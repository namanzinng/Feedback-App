import React from 'react'
import PropTypes from 'prop-types'

function Header({bgColor, text, textColor}) {
   const headerStyle = {
     backgrounColor: bgColor,
     color: textColor
    }
  return (
    <header style={headerStyle}>
        <div className="container">

      <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "FEEDBACK UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: '#ff6a95'
}
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}
export default Header
