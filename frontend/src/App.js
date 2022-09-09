
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"




function App() {




  return (


    <Router>

      <Route exact path="/" component={Join} />
      <Route path="/chat" component={Chat} />

    </Router>

  );
}

export default App;
