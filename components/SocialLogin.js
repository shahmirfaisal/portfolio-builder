export default function SocialLogin({ icon, text, className, onClick }) {
  return (
    <div
      className={[
        "relative border-2 border-gray-100 flex items-center p-2 rounded-md space-x-2 cursor-pointer shadow-sm",
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}
