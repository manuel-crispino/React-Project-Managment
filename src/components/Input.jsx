import React, { forwardRef } from 'react';

const Input = forwardRef(({label, textarea, ...props}, ref) => {
  const classes = "w-full ...";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor={label}>{label}</label>
      {textarea ? (
        <textarea className={classes} {...props} ref={ref} />
      ) : (
        <input className={classes} {...props} ref={ref} />
      )}
    </p>
  );
});

export default Input;