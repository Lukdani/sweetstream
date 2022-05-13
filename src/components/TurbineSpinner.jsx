import "./TurbineSpinner.css";
const offset = 0;

const TurbineSpinner = ({ scale = 50, rotateOnScroll = false }) => {
  return (
    <div
      className="turbine-spinner-container"
      style={{ height: scale, width: scale }}
    >
      <div className="turbine-spinner">
        <div className="turbine-spinner-engine">
          <div
            className={`${
              rotateOnScroll
                ? "turbine-spinner-wing-container turbine-spinner-wing-container--animationDisabled "
                : "turbine-spinner-wing-container "
            }`}
            style={{
              transformOrigin: `${scale / 15}px ${scale + scale / 10}px`,
              transform: rotateOnScroll ? `rotateZ(${offset}deg)` : null,
            }}
          >
            <div
              className="turbine-spinner-wing"
              style={{
                height: scale,
                width: scale / 7.5,
                transform: `rotate(360deg) translate(0px) rotate(-360deg)`,
              }}
            />
            <div
              className="turbine-spinner-wing"
              style={{
                height: scale,
                width: scale / 7.5,
                transform: `rotateZ(120deg) rotate(120deg) translate(-${
                  scale + scale / 20
                }px) rotate(-120deg)`,
              }}
            />
            <div
              className="turbine-spinner-wing"
              style={{
                height: scale,
                width: scale / 7.5,
                transform: `rotateZ(240deg) rotate(240deg) translate(${
                  scale + scale / 20
                }px) rotate(-240deg)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurbineSpinner;
