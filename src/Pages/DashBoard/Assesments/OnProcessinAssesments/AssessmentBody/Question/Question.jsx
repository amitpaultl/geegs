import React, { useEffect, useState } from "react";
import EachChoice from "./EachChoice/EachChoice";
import style from "../../onProcessinAssesments.module.css";
const Question = ({
  selectedQuestion,
  // shouldShuffle,
  selectedQuestionIndex,
  chosenAnswers,
  setChosenAnswers,
  setSeenQuestionId,
}) => {
  const [choices, setChoices] = useState([]);
  const [isMultipleChoice, setIsMultipleChoice] = useState(false);
  const shuffle = (array) => {
    array?.sort(() => Math.random() - 0.5);
    return array;
  };
  const choseAnswerChange = (e, key) => {
    if (!isMultipleChoice) {
      // todo  : for radio

      const isSelected = e.target.value;
      console.log("key: ", key, "\nisSelected: ", isSelected);
      setChosenAnswers((prevChosenAnswers) => {
        const isAlreadyChecked = prevChosenAnswers.findIndex(
          (eachPrevChosenAnswers) =>
            eachPrevChosenAnswers?.questionId === selectedQuestion?._id
        );

        if (isAlreadyChecked === -1) {
          // todo for first time option clicked
          // console.log("first clicked");
          const newChosenAnswerForThisQues = {
            questionId: selectedQuestion?._id,
            chosenOptions: [key],
          };
          const newChosenAnswers = [
            ...prevChosenAnswers,
            newChosenAnswerForThisQues,
          ];
          return newChosenAnswers;
        } else {
          // todo for   re-clicked
          // console.log("re-clicked");

          const prevChosenAnswerForThisQues =
            prevChosenAnswers[isAlreadyChecked];
          const newChosenAnswers = prevChosenAnswers?.map(
            (eachChosenAnswer) => {
              if (
                eachChosenAnswer?.questionId ===
                prevChosenAnswerForThisQues?.questionId
              ) {
                prevChosenAnswerForThisQues.chosenOptions = [key];
                const newChosenAnswerForThisQues = {
                  ...prevChosenAnswerForThisQues,
                };
                newChosenAnswerForThisQues.chosenOptions = [key];
                return newChosenAnswerForThisQues;
              } else {
                return eachChosenAnswer;
              }
            }
          );
          return newChosenAnswers;
        }
      });
    } else {
      // todo  :  for checkbox
      const isChecked = e?.target?.checked;
      console.log("key: ", key, "\nisChecked: ", isChecked);
      setChosenAnswers((prevChosenAnswers) => {
        const isAlreadyChecked = prevChosenAnswers.findIndex(
          (eachPrevChosenAnswers) =>
            eachPrevChosenAnswers?.questionId === selectedQuestion?._id
        );

        if (isAlreadyChecked === -1) {
          // todo for first time option checked
          // console.log("first checked");
          const newChosenAnswerForThisQues = {
            questionId: selectedQuestion?._id,
            chosenOptions: [key],
          };
          const newChosenAnswers = [
            ...prevChosenAnswers,
            newChosenAnswerForThisQues,
          ];
          return newChosenAnswers;
        } else {
          // todo for   re- checked
          console.log("re- checked");

          const prevChosenAnswerForThisQues =
            prevChosenAnswers[isAlreadyChecked];
          const newChosenAnswers = prevChosenAnswers?.map(
            (eachChosenAnswer) => {
              if (
                eachChosenAnswer?.questionId ===
                prevChosenAnswerForThisQues?.questionId
              ) {
                // to do only for this selected question answer start
                // let prevChosenAnswerForThisQues =  ["a", "c"], ["a"],  key= a/b/c/d   isChecked = true/false
                if (isChecked) {
                  // to do for this will now checked
                  // to do : push for this chosenOptionArray

                  const newChosenAnswerForThisQues = {
                    ...prevChosenAnswerForThisQues,
                  };
                  const newChosenOptions =
                    newChosenAnswerForThisQues?.chosenOptions;
                  newChosenOptions?.push(key);
                  newChosenAnswerForThisQues.chosenOptions = newChosenOptions;
                  return newChosenAnswerForThisQues;
                } else {
                  // to do fo this will now un- checked
                  // let prevChosenAnswerForThisQues =  ["a"],["a", "b"]   key= a/b/c/d   isChecked =false
                  const newChosenAnswerForThisQues = {
                    ...prevChosenAnswerForThisQues,
                  };
                  const newPrevChosenOptions =
                    newChosenAnswerForThisQues?.chosenOptions;
                  if (newPrevChosenOptions?.length > 1) {
                    const newChosenOptions = newPrevChosenOptions.filter(
                      (eachOption) => eachOption !== key
                    );
                    newChosenAnswerForThisQues.chosenOptions = newChosenOptions;
                    return newChosenAnswerForThisQues;
                  } else {
                    return null;
                  }
                }
              } else {
                return eachChosenAnswer;
              }
            }
          );

          const latestNewChosenAnswers = newChosenAnswers?.filter(
            (eachNewChosenAnswers) => eachNewChosenAnswers != null
          );
          // console.log("latestNewChosenAnswers : ", latestNewChosenAnswers);
          return latestNewChosenAnswers;
        }
      });
    }
  };
  useEffect(() => {
    setChoices(selectedQuestion?.optionObject?.choices);

    if (selectedQuestion?.optionObject?.answers?.length > 1) {
      setIsMultipleChoice(true);
    } else {
      setIsMultipleChoice(false);
    }
    // console.log("chosenAnswers: ", chosenAnswers);
  }, [selectedQuestion]);
  return (
    <div>
      <h1 className={`${style.questionTitle}`}>
        Topic: {selectedQuestion?.topicName}
      </h1>
      <div className="flex justify-between   md:px-4">
        <div className="flex flex-col">
          <h1 className= {`${style.questionNo}`}>
            Question No: {selectedQuestionIndex + 1}
          </h1>
          
        </div>
        <div className="flex flex-col">
          <h1 className= {`${style.questionNo}`}>
          Difficulty Level : {selectedQuestion?.difficultyLevel}
          </h1>

        </div>
      </div>

      <h1 className={`${style.questionAss}`}>
        {selectedQuestion?.questionName}
      </h1>
      <form className= {`inline-block ml-11 ${style.quesChoices}`}>
        {choices?.map((eachChoice, i) => (
          <EachChoice
            key={i}
            eachChoice={eachChoice}
            isMultipleChoice={isMultipleChoice}
            choseAnswerChange={choseAnswerChange}
            chosenAnswers={chosenAnswers}
            selectedQuestion={selectedQuestion}
          />
        ))}
      </form>
    </div>
  );
};

export default Question;
