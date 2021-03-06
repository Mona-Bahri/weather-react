import "./App.css";
import NavigationBar from "./NavigationBar";
import Cityforcast from "./Cityforcast";
import Weekdays from "./Weekdays";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App container-fluid p-0 ">
      <div className="header">
        <div className="local-time">
          <div>Sunday</div>
          <div> 14:23</div>
        </div>
        <NavigationBar />
        <Cityforcast city="tehran" />
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
          <a
            href="https://github.com/Mona-Bahri/weather-react"
            target={"_blank"}
            rel="noreferrer"
          >
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
