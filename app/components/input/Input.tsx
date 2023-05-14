"use client";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  lebel: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  lebel,
  id,
  type,
  required,
  disabled,
  register,
  errors,
}) => {
  return (
    <div>
        <label 
        className="block text-sm font-medium leading-6 text-gray-500"
        htmlFor={id}>
            {lebel}
        </label>
        <div className="mt-2">
          <input
            id={id}
            type={type}
            autoComplete={id}
            disabled={disabled}
            {...register(id, { required })}
            className={clsx(
              "appearance-none block w-full px-3 ring-1 ring-inset ring-gray-300 border-0 py-1.5 border-gray-300 rounded-md shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 focus:border-indigo-500 sm:text-sm sm:leading-6", 
              errors[id] && "focus:ring-red-600",
              disabled && "opacity-50 cursor-default",
            )}
          />
        </div>
    </div>
  );
};

export default Input;
