import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function App() {
  // console.log(movies.find((item) => item.show.id === 34653));
  // movies.find((item) => item.show.id === 34653)
  return (
    // <div className="w-full">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows/:id" element={<Details />} />
    </Routes>
    // </div>
  );
}

export default App;
