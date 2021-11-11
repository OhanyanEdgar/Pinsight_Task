
// Important
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Components
import UserList from "./components/UserList"
import UserPrefPanel from "./components/UserPrefPanel";

function App() {

  const [users, setUsers] = useState([
    {
      username: "sim_sim",
      email: "ssimonyan1989@gmail.com",
      fullName: "Simon Simonyan",
      password: "strong_password",
      billingPlan: {
        week: 100,
      },
      id: Date.now() + 1,
    },
    {
      username: "ed_ohanyan",
      email: "edgarohanyan1994@gmail.com",
      fullName: "Edgar Ohanyan",
      password: "strong_password",
      billingPlan: {
        month: 350,
      },
      id: Date.now() + 2,
    },
    {
      username: "J_Smith",
      email: "smithjohn1978@gmail.com",
      fullName: "Jone Smith",
      password: "strong_password",
      billingPlan: {
        year: 4000,
      },
      id: Date.now() + 3,
    },
  ]);

  // const [users, setUsers] = useState(() => {
  //   const saved = localStorage.getItem("users");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  const handleOnDelUser = userId => {
    setUsers(prev => {
      return prev.filter(user => user.id !== userId);
    })
  }

  return (
    <Router>
      <div className="container pt-4">
        {/* <UserList users={users} onDelUser={handleOnDelUser} /> */}


        <Routes>
          <Route path="/" element={<UserList users={users} onDelUser={handleOnDelUser} />} />
          <Route path="/create_user" element={<UserPrefPanel panelType={ "create" } />} />
          <Route path="/update_user" element={<UserPrefPanel panelType={ "update" } />} />
        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
