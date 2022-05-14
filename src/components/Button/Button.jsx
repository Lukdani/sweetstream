import { useMemo } from "react";
import "./Button.css";

const colorClasses = (color, darkText, alt) => {
  let classes = darkText ? "button--darkText " : "";
  switch (color) {
    case "secondary":
      classes += alt
        ? "button-secondary  button-secondary--alt"
        : "button-secondary";
      break;
    default:
      classes += "button-primary";
  }
  return classes;
};

const Button = ({
  onClick,
  label,
  color,
  alt,
  classes = "",
  darkText = false,
  children,
  icon,
  endIcon,
}) => {
  const colorClass = useMemo(() => {
    return colorClasses(color, darkText, alt);
  }, [alt, color, darkText]);

  return (
    <button
      className={`btn button ${colorClass} ${classes}`}
      type="button"
      onClick={onClick}
    >
      {children ? children : null}
      {icon ? <i className={`fa-solid fa-${icon} me-2`} /> : null}
      {label}
      {endIcon ? endIcon : null}
    </button>
  );
};

export default Button;
