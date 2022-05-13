import "./Card.css";

const Card = ({ header, children, date, noBorder = false }) => {
  return (
    <div
      className={`${
        noBorder ? "custom-card custom-card--noBorder" : "custom-card"
      }`}
    >
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
