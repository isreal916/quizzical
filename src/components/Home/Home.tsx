// import  './Home.scss';
interface homeProps {
  startQuiz:() => void
}
export function Home({startQuiz}:homeProps) {
  
  return (
    
      <div className="w-[200px] h-[200px] ">
        <h1 className="text-[31.25px] text-[#293264] font-mono text-center">
          Quizzical
        </h1>
        <p className="text-[#293264] mb-[14px]">Some description if needed</p>
        <button className="rounded-[15px] text-center font=[16px] bg-[#4D5B9E] w-[193px] h-[52px] text-white" onClick={startQuiz}>
          Start quiz
        </button>
        

      </div>
     
      
    
  );
}
