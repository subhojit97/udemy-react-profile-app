import "./App.module.css";
import ProfileList from "./components/ProfileList/ProfileList";
//import { AiFillApple } from "react-icons/ai";

function App() {
  return (
    <div className="App" style={headerStyle}>
      <ProfileList />
    </div>
  );
}

const headerStyle = {
  color: "white",
};

export default App;
