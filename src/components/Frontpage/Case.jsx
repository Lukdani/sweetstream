import { useEffect, useState, useRef } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Case.css";

const Case = ({ caseItem }) => {
  const [isExpanded, setIsExpanded] = useState();
  const caseContainer = useRef(null);

  useEffect(() => {
    setIsExpanded(caseContainer.current?.clientHeight > 90 ? false : undefined);
  }, []);

  return (
    <Card header={caseItem.header} date={caseItem.year}>
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
