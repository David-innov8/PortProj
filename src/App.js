import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./routes/Routing";
import { Provider } from "react-redux";
import store from './Redux/Store/store'

// import { QueryClientProvider, QueryClient } from "react-query";

// const queryClient = new QueryClient()


function App() {
  return (
    <Provider store={store}>

    
    
    <Router>
      <div>
        {/* <LandingPage/> */}
        <Routing />
      </div>
    </Router>
  
    </Provider>
  )
}

export default App;
