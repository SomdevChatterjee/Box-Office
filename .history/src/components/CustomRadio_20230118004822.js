import React from 'react'

const CustomRadio = ({label, ...restProps}) => {
  return (
    <div>
    <label htmlFor="actors-search">
      Actors
      <input
        id="actors-search"
        type="radio"
        value="people"
        checked={!isShowsSearch}
        onChange={onRadioChange}
      />
    </label>
    </div>  
  )
}

export default CustomRadio
