import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";


const Main = () => {
  return <h1>Добро пожаловать!</h1>;
};

const Profile = () => {
  return <h2>Страница профиля</h2>;
};

const Messages = () => {
  return <h2>Страница сообщений</h2>;
};

const Settings = () => {
  return <h2>Страница настроек</h2>;
};

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            aria-orientation="vertical"
          >
            <NavLink className="nav-link" id="main" to="/">
              Главная
            </NavLink>
            <NavLink className="nav-link" id="profile" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" id="messages" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" id="settings" to="settings">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/main" element={<Main />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
