import "./App.css";
import { Home, Question } from "./components";
import { useState } from "react";
import { correct_answer, data } from "./data";
function App() {
  const [startquiz, setStartQuiz] = useState<boolean>(false);
  const [restart, setRestart] = useState<boolean>(false);

  const startQuiz = () => {
    setStartQuiz(!startquiz);
  };
  const checkAnswer = () => {
    setRestart(true)
    const choosed = document.querySelectorAll(".choosed");
    choosed.forEach((choosed) => {
      if (correct_answer.includes(choosed.innerHTML)) {
        
        choosed.style.backgroundColor = "#94D7A2";
      } else {
        choosed.style.backgroundColor = "#F7BBBB ";
        const wrongid = choosed.getAttribute("data-id");
      const   wrongoptions = document.getElementsByClassName(`${wrongid}`);
        for (let i = 0; i < wrongoptions.length; i++) {
          const element = wrongoptions[i];

        (correct_answer.includes(element.innerHTML))?element.style.backgroundColor = "#94D7A2":'false';


    
        }


}
    });
  };

  return (
    <>
    <div className="flex bg-slate-50 w-screen h-screen overflow-hidden    ">
      <div className="bg-[url('./blob.svg')] w-[100px] h-[100px] bg-no-repeat fixed right-0 -z-5  "></div>
      <div className="bg-[url('./blob-2.svg')] w-[100px] h-[100px] bg-no-repeat fixed bottom-0 -z-4  "></div>
      
      {startquiz ? (
        <div className="flex flex-col m-auto    ">
          {data &&
            data.results.map((data) => {
              return <Question key={data.id} prop={data} />;
            })}
            <div className="flex">
          <button
            className="rounded-[15px] text-center font=[16px] bg-[#4D5B9E] w-[193px] h-[52px] text-white m-auto"
            onClick={checkAnswer}
          >
            Check answers
          </button>
          {restart &&  <button
            className="rounded-[15px] text-center font=[16px] bg-[#4D5B9E] w-[193px] h-[52px] text-white m-auto"
            onClick={()=>window.location.reload()}
          >
            Restart quiz
          </button>
         }
         </div>
        </div>
      ) : (
        <Home startQuiz={startQuiz} />
      )}
      </div>
    </>
  );
}

export default App;
