import React from "react";
import Component3 from "./Components/Component3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/Component1";
import Hooks from "./Components/Hooks";
import Forms from './Components/Forms';
import SingleEmployee from "./Components/SingleEmployee";
import NotFound from "./Components/NotFound";
import ParentComponent from "./Components/useCallback";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/component1" element={<Component3 />} />
          <Route path="/component2" element={<Forms />} />
          <Route path="/component3" element={<Hooks />} />
           <Route path="/employees/:id" element={<SingleEmployee/>} />
          <Route path="/" element={<AboutMe />} />
          < Route path="*"
              element={<NotFound/>}
            />
          < Route path="/component4"
              element={<ParentComponent/>}
            />
   
            < Route path="/component5"
              element={<ParentComponent/>}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
