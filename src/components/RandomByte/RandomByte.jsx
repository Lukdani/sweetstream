import "./RandomByte.css";
const RandomByte = ({
  index,
  randomTop,
  randomLeft,
  parentDimensions,
  byte,
  lighten,
}) => (
  <p
    key={`random-byte-${index}`}
    className={lighten ? "randomByte randomByte--lighten" : "randomByte"}
    style={{
      bottom: randomTop,
      left: randomLeft,
      animationDuration: `${1 + index / 25}s`,
      transform: `translate(${
        randomLeft + 100 >= parentDimensions.width ? "-100%, " : "0px, "
      } ${randomTop + 30 >= parentDimensions.height ? "100%" : "0px"})`,
    }}
  >
    {byte}
  </p>
);

export default RandomByte;
