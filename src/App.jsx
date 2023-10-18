import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomRouter } from "./router/CustomRouter";

function App() {
  
  return (
    <Router>
      <Routes>
        {CustomRouter.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
