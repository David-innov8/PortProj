import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./routes/Routing";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()


function App() {
  return (

    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        {/* <LandingPage/> */}
        <Routing />
      </div>
    </Router>
    </QueryClientProvider>
  )
}

export default App;
