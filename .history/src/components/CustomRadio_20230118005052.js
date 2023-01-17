import React from 'react'

const CustomRadio = ({label, ...restProps}) => {
  return (
    <div>
    <label htmlFor="shows-search">
      Shows
      <input
        type="radio"
        {...restProps}
      />
    </label>
    </div>  
  )
}

export default CustomRadio
