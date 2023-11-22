import React from "react";
import he from "he";
import { shuffleArray } from "../../utils/shuffle";
const data = {
  id: 1,
  category: "Science & Nature",
  type: "multiple",
  difficulty: "easy",
  question: "Which Apollo mission was the first one to land on the Moon?",
  correct_answer: "Apollo",
  incorrect_answers: ["Apollo10", "Apollo9", "Apollo13"],
};

export interface QuestionProps {
  prop?: {
    id: number;
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
  };
}

export function Question({ prop = data }: QuestionProps) {
  const option = [...prop.incorrect_answers, prop.correct_answer];
  shuffleArray(option);
  function Clicks(e: React.MouseEvent<HTMLButtonElement>): void {
    const elements = document.getElementsByClassName(prop.id);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("bg-violet-200");
      element.classList.remove("choosed");
      element.classList.remove("border-none");
    }
    e.target.classList.add("border-none");

    e.target.classList.add("bg-violet-200");
    e.target.classList.add("choosed");
  }
  return (
    <div className="flex flex-col border-b-2 border-blue-slate-500 border-solid w-[100%]   z-10 p-5 m-[1px]">
      <h1 className="text-[#293264] mb-[5px] w-[420px] font-[Karla] font-[16px] font-bold line-h-6 ">
        {he.decode(prop.question)}
      </h1>
      <div className="flex">
        {option.map((option) => {
          return (
            <button
              key={option}
              className={`rounded-[7.42px]  border-[0.794px] border-[#4D5B9E]  p-0 min-w-[120px] ml-[5px] font-[10px]  ${prop.id}`}
              onClick={Clicks}
              data-id={prop.id}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
