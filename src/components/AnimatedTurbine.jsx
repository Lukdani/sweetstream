import { useCallback, useEffect, useState } from "react";
import { generateByte } from "../utils/generateByte";
import "./AnimatedTurbine.css";

const AnimatedTurbine = ({
  scale,
  rotateOnScroll = false,
  disableBinaryPrint = false,
  uniqueKey,
}) => {
  const [bytes, setBytes] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (rotateOnScroll) {
      const onScroll = () => setOffset(window.pageYOffset * 1.2);

      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [rotateOnScroll]);

  const addByte = useCallback(() => {
    const newByte = generateByte();
    const newByteItem = {
      byte: generateByte(),
      top: Math.floor(Math.random() * scale),
      left: Math.floor(Math.random() * scale),
      keyString: `${uniqueKey}${newByte}-${new Date().getTime()}`,
    };
    if (bytes.length < 10) {
      setBytes((prevValue) => [...prevValue, newByteItem]);
    } else {
      const newBytes = [...bytes];
      newBytes.pop();
      newBytes.unshift(newByteItem);
      setBytes(newBytes);
    }
  }, [bytes, scale, uniqueKey]);

  useEffect(() => {
    let timeout;
    if (!disableBinaryPrint) {
      timeout = setInterval(() => {
        addByte();
      }, 750);
    }
    return () => clearInterval(timeout);
  }, [addByte, disableBinaryPrint]);

  return (
    <div
      className="animated-turbine-container"
      style={{ height: scale, width: scale }}
    >
      <div
        className="animated-turbine"
        style={{ opacity: `${100 - offset / 5}%` }}
      >
        <div
          className="animated-turbine-pole"
          style={{ height: scale * 0.65, width: scale / 25 }}
        />

        <div className="animated-turbine-engine">
          <div
            className={`${
              rotateOnScroll
                ? "animated-turbine-wing-container animated-turbine-wing-container--animationDisabled "
                : "animated-turbine-wing-container "
            }`}
            style={{
              transformOrigin: `${scale / 60}px ${
                scale * 0.35 + scale / 40 - scale / 80
              }px`,
              transform: rotateOnScroll ? `rotateZ(${offset}deg)` : null,
            }}
          >
            <div
              className="animated-turbine-wing"
              style={{
                height: scale * 0.35,
                width: scale / 30,
                transform: `rotate(360deg) translate(0px) rotate(-360deg)`,
              }}
            />
            <div
              className="animated-turbine-wing"
              style={{
                height: scale * 0.35,
                width: scale / 30,
                transform: `rotateZ(120deg) rotate(120deg) translate(-${
                  scale * 0.35 - scale / 40
                }px) rotate(-120deg)`,
              }}
            />
            <div
              className="animated-turbine-wing"
              style={{
                height: scale * 0.35,
                width: scale / 30,
                transform: `rotateZ(240deg) rotate(240deg) translate(${
                  scale * 0.35 - scale / 40
                }px) rotate(-240deg)`,
              }}
            />
          </div>
          <div
            style={{
              width: scale / 15,
              height: scale / 15,
            }}
            className="animated-turbine-engine-motor"
          />
          <div className="animated-turbine-grass">
            <div style={{ height: scale * 0.03, width: scale * 0.1 }}></div>
            <div className="animated-turbine-grass-items">
              <div
                style={{
                  height: scale * 0.06,
                  width: scale * 0.01,
                }}
              ></div>
              <div
                style={{
                  height: scale * 0.06,
                  width: scale * 0.01,
                }}
              ></div>
              <div
                style={{
                  height: scale * 0.06,
                  width: scale * 0.01,
                }}
              ></div>
              <div
                style={{
                  height: scale * 0.06,
                  width: scale * 0.01,
                }}
              ></div>
              <div
                style={{
                  height: scale * 0.06,
                  width: scale * 0.01,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {disableBinaryPrint
        ? null
        : bytes.map((byteItem) => {
            return (
              <div
                key={`${byteItem.keyString}`}
                className="animated-turbine-binary-item"
                style={{ top: byteItem.top, left: byteItem.left }}
              >
                {byteItem.byte}
              </div>
            );
          })}
    </div>
  );
};

export default AnimatedTurbine;
