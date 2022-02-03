import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Profile } from "./pages/Profile";
import { configStore } from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  const store = configStore();
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
