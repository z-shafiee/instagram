import React from 'react';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
      {children}
    </button>
  );
}

export default Button;
