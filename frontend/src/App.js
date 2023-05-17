import { BrouseRouter, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
