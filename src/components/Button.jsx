import React from 'react'

const Button = ({className="", size="default", children}) => {

    const baseClasses =
        "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-black bg-[#CBFE00] text-black hover:bg-[#CBFE00]/90 shadow-lg shadow-[#CBFE00]/25";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-2 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <div>
        <button className={classes}>
            <span className='relative flex items-center justify-center gap-2'>{children}</span>
        </button>
    </div>
  )
}

export default Button