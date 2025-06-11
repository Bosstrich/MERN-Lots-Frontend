import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputBox = React.forwardRef(({
  name,
  type="text",
  placeholder,
  icon,
  error,
  className,
  ...rest
}, ref) => {
  return (
    <>
      <div className={`relative ${className}`}>
        <input 
          name={name}
          ref={ref}
          className='w-full py-2.5 pl-10 pr-3 bg-gray-100 focus:bg-transparent outline-secondary placeholder:text-secondary rounded-sm' 
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        <FontAwesomeIcon icon={icon} width={23} className='absolute top-1/2 text-secondary -translate-y-1/2 left-2'/>
      </div>    
      {error && <p className="text-red-500 text-sm my-2">{error}</p>}
 
    </>

  )
})

export default InputBox
