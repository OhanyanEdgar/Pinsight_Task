
// Important
import { useState } from "react";

// Components
import UserList from "./components/UserList"

function App() {

  const [users, setUsers] = useState([
    {
      username: "ed_ohanyan",
      email: "edgarohanyan1994@gmail.com",
      fullName: "Edgar Ohanyan",
      password: "strong_password",
      billingPlan: {
        month: 350,
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
      id: Date.now() + 1,
    },
  ])

  return (
    <div className="container pt-4">
      <UserList users={users} />
    </div>
  );
}

export default App;
