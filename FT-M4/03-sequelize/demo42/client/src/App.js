import {Routes, Route, useLocation} from "react-router-dom";

import Home from "./views/Home";
import Detail from "./views/Detail";
import About from "./views/About";
import Login from "./views/Login";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/about" ? console.log("Estas en el about") : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />}>
          {/* <Route path="/bartolomiau" /> * localhos:3000/about/bartolomiau */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import {useRef} from "react";
// function App() {
//   // const [count,setCount] = useState(0)
//   let count = useRef(0);
//   console.log(count);

//   function clickHandler() {
//     count.current = count.current + 1;
//     alert(`You clicked ${count.current} times`);
//   }

//   return (
//     <div>
//       <button onClick={clickHandler}>Click me!</button>
//     </div>
//   );
// }

// export default App;
