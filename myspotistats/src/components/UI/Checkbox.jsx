import React from 'react'

const Checkbox = ({label, value, onChange, id}) => {
  return (
    <>
        <label htmlFor={id}>
            {label}
        </label>
        <input type="checkbox" id={id} checked={value} onChange={onChange} />
    </>
  )
}

export default Checkbox