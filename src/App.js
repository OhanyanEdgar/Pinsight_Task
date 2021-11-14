
// Important
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// Components
import Home from "./pages/Home"
import UserList from "./pages/UserList";
import UserPrefPanel from "./pages/UserPrefPanel";

function App() {

  return (
    <Router>
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user_list" element={<UserList /> } />
          <Route path="/create_user" element={<UserPrefPanel panelType={ "create" } />} />
          <Route path="/update_user" element={<UserPrefPanel panelType={ "update" } />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
