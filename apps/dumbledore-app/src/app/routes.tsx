import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
    Link,
    useParams,
  } from "react-router-dom";
import { SimpleFetchView } from "./SimpleFetch";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()
  
  export const MainRouter = () => {
    
    const isLoggedIn = true;

    return <QueryClientProvider client={queryClient}> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/app" />} />
      <Route path="/app/" element={<div>
        this is the app
        <Link to="/protected">Hemlisar</Link>
      </div>} /> 
      { isLoggedIn && <Route path="/protected" element={<div>
        Här finns det hemlisar
        <SimpleFetchView />
        </div>} />}
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </BrowserRouter></QueryClientProvider>
  }

  /* <Link to="/app">To app </Link> */

