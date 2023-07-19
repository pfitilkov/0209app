import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { Friends } from "./components/Friends";
import { Settings } from "./components/Settings";
import { Shop } from "./components/Shop";


function App(props) {
  console.log(props);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            aria-orientation="vertical"
          >
            <NavLink className="nav-link" id="main" to="/main">
              Главная
            </NavLink>
            <NavLink className="nav-link" id="profile" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" id="friends" to="friends">
              Друзья
            </NavLink>
            <NavLink className="nav-link" id="settings" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" id="shop" to="shop">
              Магазин
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/main" element={<Main />} /> 
            <Route path="/profile/*" element={<Profile function={props.function.key_getUser} />} />
            <Route path="/friends" element={<Friends function={props.function.key_getUsers} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
