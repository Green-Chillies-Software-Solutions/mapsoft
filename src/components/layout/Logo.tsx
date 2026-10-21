import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  return (
    <Link
      to="/"
      aria-label="Mapsoft Technologies — home"
      className={`group inline-flex items-center ${className}`}
    >
      <img
        src={logo}
        alt="Mapsoft Technologies"
        width={397}
        height={127}
        className={`site-logo w-auto transition-transform duration-500 group-hover:scale-[1.04] ${
          size === "large" ? "h-11 sm:h-12" : "h-9 sm:h-10"
        }`}
      />
    </Link>
  );
}
