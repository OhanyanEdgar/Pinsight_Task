
// Important
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import UserList from "./components/UserList"
import UserPrefPanel from "./components/UserPrefPanel";

function App() {

  return (
    <Router>
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create_user" element={<UserPrefPanel panelType={ "create" } />} />
          <Route path="/update_user" element={<UserPrefPanel panelType={ "update" } />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
