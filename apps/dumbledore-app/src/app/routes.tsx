import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
  } from "react-router-dom";

  
  export const MainRouter = () => {

    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/app" />} />
      <Route path="/app" element={<div>this is the app</div>} />    
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </BrowserRouter>
  }

  /* <Link to="/app">To app </Link> */