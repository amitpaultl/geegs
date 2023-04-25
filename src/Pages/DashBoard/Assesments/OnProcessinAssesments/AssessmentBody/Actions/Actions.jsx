import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import style from "../../onProcessinAssesments.module.css";
const Actions = ({
  selectedQuestionIndex,
  setSelectedQuestionIndex,
  changeSelectedQuestionIndexOneByOne,
  totalQuestions,
}) => {
  return (
    <div className="w-full px-2 md:px-8 ">
      <div className={`${style.clickBtn} flex gap-4  justify-center`}>
        <button
          onClick={() => changeSelectedQuestionIndexOneByOne(-1)}
          disabled={selectedQuestionIndex === 0}
          className={` nextBtu ${selectedQuestionIndex === 0
              ? " active:bg-red-500 "
              : " active:bg-green-500 "
            }`}
          type="button"
        >
          <FaAngleLeft />
          Back
        </button>
        <button
          disabled={selectedQuestionIndex + 1 === totalQuestions}
          onClick={() => changeSelectedQuestionIndexOneByOne(+1)}
          type="button"
          className={` nextBtu ${selectedQuestionIndex + 1 === totalQuestions
              ? " active:bg-red-500 bg-red-300"
              : " active:bg-green-500 "
            }`}
        >
          Next
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Actions;
