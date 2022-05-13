import "./Feature.css";

const Feature = ({ icon, header, text }) => {
  return (
    <div className="feature">
      <i className={`fa-solid fa-${icon}`} />
      <h4>{header}</h4>
      {text.split("\n").map((textItem, index) => (
        <p key={textItem + index}>{textItem}</p>
      ))}
    </div>
  );
};

export default Feature;
