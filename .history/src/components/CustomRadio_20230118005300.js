import React from 'react'

const CustomRadio = ({label, ...restProps}) => {
  return (
    <div>
    <label htmlFor = >
      {label}
      <input
        {...restProps}
        type="radio" />
    </label>
    </div>  
  )
}

export default CustomRadio
