import React from "react";
import Actions from "./Actions/Actions";
import Question from "./Question/Question";

const AssessmentBody = ({
  selectedQuestion,
  setSelectedQuestion,
  setSeenQuestionId,
  chosenAnswers,
  setChosenAnswers,
  // shouldShuffle,
  selectedQuestionIndex,
  setSelectedQuestionIndex,
  changeSelectedQuestionIndexOneByOne,
  totalQuestions,
}) => {
  // console.log("shouldShuffle: ", shouldShuffle);
  return (
    <div className="h-full">
      {/* <h1>AssessmentBody</h1> */}
      <div className="  ">
        <div className="nmndmk">
          <Question
            selectedQuestion={selectedQuestion}
            // shouldShuffle={shouldShuffle}
            selectedQuestionIndex={selectedQuestionIndex}
            chosenAnswers={chosenAnswers}
            setChosenAnswers={setChosenAnswers}
            setSeenQuestionId={setSeenQuestionId}
          />
        </div>
        <div className=" w-full flex justify-center mt-2 lg:mt-4">
          <Actions
            selectedQuestionIndex={selectedQuestionIndex}
            setSelectedQuestionIndex={setSelectedQuestionIndex}
            changeSelectedQuestionIndexOneByOne={
              changeSelectedQuestionIndexOneByOne
            }
            totalQuestions={totalQuestions}
          />
        </div>
      </div>
    </div>
  );
};

export default AssessmentBody;
