
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Form from "./form";
import Form2 from "./form2";
import Header from "./header";

function App() {
  return (
    <Router>
      <div className="all-page">
        <Header/>
       
        
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/form2" element={<Form2 />} />
        </Routes>
      </div>
      <Link to="/form"><button>Ir a Form</button></Link>
        <Link to="/form2"><button>Ir a Form2</button></Link>
    </Router>
    
  );
}

export default App;

