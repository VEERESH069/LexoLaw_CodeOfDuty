import React from "react";
import { Routes, Route } from "react-router-dom";
import Lexo from "../src/Component/Home";
import OurServices from "./Component/Service";
import LawyerServices from "../src/Component/Lawyers";   
import Documents from "../src/Component/Documents";
import GeminiAIChat from "./Component/Ai";
  

const App = () => {
  return (
   
      <Routes>
        <Route path="/lexo" element={<Lexo/>} />
        <Route path="/Service" element={<OurServices/>}/>
        <Route path="/lawyer" element={<LawyerServices/>}/>
        <Route path="/Document" element={<Documents/>}/>
        <Route path="/ai" element={<GeminiAIChat/>} />
        
        

        
        {/* Add more routes here if needed */}
      </Routes>
    
  );
};

export default App;