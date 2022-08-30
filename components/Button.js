function Button({ children, className, htmlFor, type, onClick }) {
  return type === "label" ? (
    <label
      className={[
        "shadow-lg bg-primary p-2 px-3 rounded-md text-white inline-flex items-center gap-2 cursor-pointer",
        className,
      ].join(" ")}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  ) : (
    <button
      className={[
        "shadow-lg bg-primary p-2 px-3 rounded-md text-white flex items-center gap-2 justify-center",
        className,
      ].join(" ")}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
