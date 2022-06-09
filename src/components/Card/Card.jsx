import { useMemo } from "react";
import "./Card.css";

const Card = ({
  header,
  children,
  date,
  noBorder = false,
  centerAlign = false,
  alternate,
}) => {
  const classes = useMemo(() => {
    const rootClass = "custom-card";
    let classes = rootClass;
    if (noBorder) classes += ` ${rootClass + "--noBorder"}`;
    if (centerAlign) classes += " text-center";
    if (alternate) classes += " custom-card--alt";
    return classes;
  }, [alternate, centerAlign, noBorder]);

  return (
    <div className={classes}>
      {date ? (
        <span className="custom-card-date text-muted">{date}</span>
      ) : null}
      <div
        className={`${
          date
            ? "custom-card-header custom-card-header--reduced"
            : "custom-card-header"
        }`}
      >
        <h3>{header}</h3>
      </div>
      <div className="custom-card-content">{children}</div>
    </div>
  );
};

export default Card;
