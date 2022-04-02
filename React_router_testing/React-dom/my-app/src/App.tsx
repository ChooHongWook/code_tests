import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { usePrompt } from "./component/Blocker";
import Main from "./page/Mypage";
import Mypage from "./page/Mypage";
// v5 -> v6
//Switch -> Routes
// useHistory -> useNavigate
const App: React.FC = () => {
  // usePrompt("현재 페이지를 벗어나시겠습니까?", true);

  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Mypage />} />
      </Routes>
    </div>
  );
};

export default App;
