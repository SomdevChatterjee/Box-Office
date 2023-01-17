import React from 'react'

const CustomRadio = ({label, ...restProps}) => {
  return (
    <div>
      <input type=radio {...restProps}/>
    </div>  
  )
}

export default CustomRadio
