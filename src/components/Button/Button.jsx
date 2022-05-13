import { useMemo } from "react";
import "./Button.css";

const colorClasses = (color, darkText) => {
  let classes = darkText ? "button--darkText " : "";
  switch (color) {
    case "secondary":
      classes += "button-secondary";
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
  classes = "",
  darkText = false,
  children,
  icon,
}) => {
  const colorClass = useMemo(() => {
    return colorClasses(color, darkText);
  }, [color, darkText]);

  return (
    <button
      className={`btn button ${colorClass} ${classes}`}
      type="button"
      onClick={onClick}
    >
      {children ? children : null}
      {icon ? <i className={`fa-solid fa-${icon} me-2`} /> : null}
      {label}
    </button>
  );
};

export default Button;
