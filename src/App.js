import "./App.css";
import NavigationBar from "./NavigationBar";
import Cityforcast from "./Cityforcast";
import Weekdays from "./Weekdays";

function App() {
  return (
    <div className="App container-fluid ">
      <div className="header">
        <div className="local-time">
          <div>Sunday</div>
          <div> 14:23</div>
        </div>
        <NavigationBar />
        <Cityforcast />
        <div className="row">
          <div className="col-3">
            <Weekdays />
          </div>
          <div className="col-3">
            <Weekdays />
          </div>
          <div className="col-3">
            <Weekdays />
          </div>
          <div className="col-3">
            <Weekdays />
          </div>
        </div>
        <div className="mt-4 git-link ">
          <a href="#" target={"_blank"} rel="noreferrer">
            {" "}
            open source code
          </a>{" "}
          {""}
          by
          <a
            href="https://fabulous-kleicha-65e289.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            Mona Bahri
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
