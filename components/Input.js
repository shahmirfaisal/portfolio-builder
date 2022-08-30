import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Input({
  placeholder,
  value,
  onChange,
  type,
  className,
}) {
  const [inputType, setInputType] = useState(type);

  const toggleType = () => {
    setInputType((currentInputType) =>
      currentInputType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="flex items-center relative">
      {type === "textarea" ? (
        <textarea
          className={[
            "border-b-2 outline-none pb-1 w-full resize-none",
            className,
          ].join(" ")}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={["border-b-2 outline-none pb-1 w-full", className].join(
            " "
          )}
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "password" &&
        (inputType === "password" ? (
          <EyeIcon onClick={toggleType} className="w-5 absolute right-3" />
        ) : (
          <EyeSlashIcon onClick={toggleType} className="w-5 absolute right-3" />
        ))}
    </div>
  );
}
