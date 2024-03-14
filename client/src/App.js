import "./App.css";
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./pages/Lobby";
import RoomPage from "./pages/Room";
function App() {
  return (
    <div className=" App ">
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
