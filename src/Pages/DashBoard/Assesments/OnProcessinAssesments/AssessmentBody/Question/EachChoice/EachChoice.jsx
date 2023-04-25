import React, { useEffect, useState } from "react";
import style from ".././../../onProcessinAssesments.module.css";
const EachChoice = ({
  eachChoice,
  isMultipleChoice,
  choseAnswerChange,
  chosenAnswers,
  selectedQuestion,
}) => {
  const [shouldChecked, setSoulChecked] = useState(false);
  const key = Object.keys(eachChoice)[0];
  useEffect(() => {
    const thisChosenAnswer = chosenAnswers?.find(
      (eachAnswer) => eachAnswer?.questionId === selectedQuestion?._id
    );

    if (thisChosenAnswer) {
      // if (isMultipleChoice) {
      //   // to do for checkbox
      // } else {
      // to do for radio
      const thisChosenOptions = thisChosenAnswer?.chosenOptions;
      const isPresentInThisArray = thisChosenOptions?.find(
        (eachOption) => eachOption === key
      );
      if (isPresentInThisArray) {
        setSoulChecked(true);
      } else {
        setSoulChecked(false);
      }
      // if( )
      // }
    } else {
      setSoulChecked(false);
    }
  }, [eachChoice, chosenAnswers]);
  return (
    <label
      className="flex items-center gap-9 mb-9 cursor-pointer"
      htmlFor={key}
    >
      <input
        checked={shouldChecked}
        type={isMultipleChoice ? "checkbox" : "radio"}
        name="group"
        id={`${key}`}
        className=" p-0"
        onChange={(e) => choseAnswerChange(e, key)}
      />
      <p className="text-xl ">{eachChoice?.[key]}</p>
    </label>
  );
};

export default EachChoice;
