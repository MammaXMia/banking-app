import React from 'react'
import StickyNavbar from './StickyNavbar'

const BaseLayout = (props) => {
  return (
    <>
    <StickyNavbar/>
    {props.children}


    </>
  )
}

export default BaseLayout