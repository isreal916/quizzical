import "./App.css";
import { Home, Question } from "./components";
import { useState } from "react";
import { correct_answer, data } from "./data";
function App() {
  const [startquiz, setStartQuiz] = useState<boolean>(false);
  const [restart, setRestart] = useState<boolean>(false);
 const [correct,setCorrect] =  useState<number>(0);
  const startQuiz = () => {
    setStartQuiz(!startquiz);
  };
  const checkAnswer = () => {
    setRestart(true);
    const choosed = document.querySelectorAll(".choosed");
    choosed.forEach((choosed) => {
      if (correct_answer.includes(choosed.innerHTML)) {
        choosed.style.backgroundColor = "#94D7A2";
        choosed.classList.add("correct");
        console.log(choosed.className);
      } else {
        choosed.style.backgroundColor = "#F7BBBB ";
        const wrongid = choosed.getAttribute("data-id");
        const wrongoptions = document.getElementsByClassName(`${wrongid}`);
        for (let i = 0; i < wrongoptions.length; i++) {
          const element = wrongoptions[i];

          correct_answer.includes(element.innerHTML)
            ? (element.style.backgroundColor = "#94D7A2")
            : "false";
        }
      }
      const correct = document.querySelectorAll('.correct');

      setCorrect(correct.length)
    });

    
  };
  return (
    <>
      <div className="flex bg-slate-50 w-screen h-screen overflow-hidden main-container">
       

        {startquiz ? (
          <div className="flex flex-col m-auto">
            {data &&
              data.results.map((data) => {
                return <Question key={data.id} prop={data} />;
              })}
            <div className="flex">
              {!restart && (
                <button
                  className="rounded-[15px] text-center font=[16px] bg-[#4D5B9E] w-[193px] h-[52px] text-white m-auto"
                  onClick={checkAnswer}
                >
                  Check answers
                </button>
              )}
              {restart && (
                <div className="flex">
                  {" "}
                  <h2 className="w-[262px] h-[15px] text-center text-[#293264] text-[12.80px] font-bold font-['Inter'] m-[23px]">
                    You scored {correct}/6 correct answers
                  </h2>{" "}
                  <button
                    className="rounded-[15px] text-center font=[16px] bg-[#4D5B9E] w-[193px] h-[45px] text-white m-auto"
                    onClick={() => window.location.reload()}
                  >
                    Play again
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex ">
          <Home startQuiz={startQuiz} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
