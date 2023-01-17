import React from 'react'

const CustomRadio = ({label, ...restProps}) => {
  return (
    <div>
      <input label={label} {...restProps}/>
    </div>  
  )
}

export default CustomRadio
