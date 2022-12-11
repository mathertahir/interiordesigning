import React from 'react'
import '../css/componentcss/component.css'

const TextField = ({label,onChange,value,inputProps}) => {
  return (
  <>
        <label className='text-field-label' htmlFor="">{label}</label>
      <input 
    className='text-field-input'
    {...inputProps}
    onChange={onChange}
    value={value}
    autoComplete='none'/>
  </>
  )
}

export default TextField