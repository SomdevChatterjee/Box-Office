import React from 'react'

const CustomRadio = ({label, ...restProps}) => {
  return (
    <div>
    <label htmlFor={}>
      Shows
      <input
        {...restProps}
        type="radio" />
    </label>
    </div>  
  )
}

export default CustomRadio
