import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "",errorMessage="", isError = false, ...props },
  ref
) {
  const id = useId();
  return (
      <div className="w-full">
        {label && (
          <label className="font-medium" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg${className}`}
          ref={ref}
        {...props}
        id={id}
        />
        {isError && (
          <span className="text-sm font-medium text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
  );
});

export default Input;
