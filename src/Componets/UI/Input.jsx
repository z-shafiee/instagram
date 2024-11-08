import React from 'react';  

const Input = ({   
  type = 'text',   
  placeholder,   
  value,   
  onChange,   
  className = '',  
  error = ''  
}) => {  
  return (  
    <div className="mb-4">  
      <input  
        type={type}  
        placeholder={placeholder}  
        value={value}  
        onChange={onChange}  
        className={`  
          w-full   
          px-3   
          py-2   
          border   
          rounded-lg   
          focus:outline-none   
          focus:ring-2   
          focus:ring-blue-500   
          ${error ? 'border-red-500' : 'border-gray-300'}  
          ${className}  
        `}  
      />  
      {error && (  
        <p className="text-red-500 text-sm mt-1">{error}</p>  
      )}  
    </div>  
  );  
};  

export default Input;