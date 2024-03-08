import React from 'react'

type ButtonProps = {
  children?: string;
  onClick?: () => void;
} 

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-primary rounded-full px-6 py-4"
      onClick={props.onClick}
    >
      <span>{ props.children }</span>
    </button>
  )
}
