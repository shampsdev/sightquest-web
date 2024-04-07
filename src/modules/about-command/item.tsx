import React from 'react'

export const Item = ({index}) => {
  return (
    <div className="w-20 h-20 bg-white relative">
      <p className="absolute bottom-0 left-0">hello {index}</p>
    </div>
  )
}
