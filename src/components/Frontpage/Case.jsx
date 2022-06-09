import { useEffect, useState, useRef } from "react";
import useRandomBytes from "../../hooks/useRandomBytes";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Case.css";

const Case = ({ caseItem }) => {
  const caseContainer = useRef(null);
  const imageContainer = useRef(null);
  const [isExpanded, setIsExpanded] = useState();
  const { randomBytes } = useRandomBytes(imageContainer, false, false);

  useEffect(() => {
    setIsExpanded(caseContainer.current?.clientHeight > 90 ? false : undefined);
  }, []);

  return (
    <Card header={caseItem.header} date={caseItem.year}>
      {caseItem.imageName ? (
        <div
          ref={imageContainer}
          style={{
            position: "relative",
            maxWidth: "100%",
            marginBottom: "1rem",
          }}
        >
          <img
            className="custom-card-imageHeader"
            src={`./images/${caseItem.imageName}`}
            alt={caseItem.imageName}
          />
          {randomBytes}
        </div>
      ) : null}

      <div
        className={`${
          isExpanded || isExpanded === undefined
            ? "case-content"
            : "case-content case-content--reduced"
        }`}
        ref={caseContainer}
      >
        {caseItem.content}
      </div>
      {isExpanded !== undefined ? (
        <Button
          classes={`${isExpanded ? "mt-1" : "mt-3"}`}
          icon={isExpanded ? "minus" : "plus"}
          darkText
          color="secondary"
          label={isExpanded ? "Read less" : "Read more"}
          onClick={() => setIsExpanded((prevValue) => !prevValue)}
        />
      ) : null}
    </Card>
  );
};

export default Case;
