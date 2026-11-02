import { Link } from "react-router-dom";

function sizeClasses(size) {
  switch (size) {
    case "sm":
      return "px-6 py-2.5";
    case "lg":
      return "px-10 py-4";
    default:
      return "px-8 py-4";
  }
}

export default function PrimaryButton({ to, children, className = "", size = "md", onClick, type = "button" }) {
  const base = `group inline-flex items-center justify-center gap-2 rounded-full border border-[#d7b39b] bg-[#c98b68] font-semibold text-[#1f1b18] shadow-[0_12px_28px_rgba(126,86,58,0.16)] transition hover:-translate-y-0.5 hover:bg-[#b97a5b] ${sizeClasses(size)} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
