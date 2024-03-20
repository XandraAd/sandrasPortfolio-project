import ContactUs from "./page/ContactUs";
import HomePage from "./page/HomePage";


import {
  Routes,Route
 
} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
      </>
  )
  
       
}

export default App;
