import React from 'react'

interface props{
	cartItemsCount: number
}

function NavBar({cartItemsCount}: props){
  return (
	 <>NavBar: {cartItemsCount}</>
  )
}

export default NavBar