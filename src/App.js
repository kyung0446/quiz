import { useState } from "react";
// 컴포넌트
import quizData from "./data/quizData";
import Categoris from "./Components/Categoris";
import QuizPage from "./Components/QuizPage";

const App = () => {  
  const [category,setCategory] = useState("");
  const onSelectCategory = (select)=>{
    setCategory(select);
  }
  return (
    <div className="app">
      <Categoris categoris={quizData.categories} 
                 onSelect={onSelectCategory} 
      />
      <QuizPage />
    </div>
  );
};

export default App;