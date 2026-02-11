import React from "react";

const Input = (props) => {
  const { errors, touched, placeholder, ...inputProps } = props;

  console.log({ errors });
  return (
    <div className="w-full">
      <label className="relative block cursor-text ">
        <input
          type="text"
          className="h-14 w-full border border-primary outline-none px-4 peer pt-2  "
          required
          {...inputProps}
        />

        <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all ">
          {placeholder}
        </span>
      </label>
      {touched && <span className="text-red-500 text-xs ">{errors}</span>}
    </div>
  );
};

export default Input;
