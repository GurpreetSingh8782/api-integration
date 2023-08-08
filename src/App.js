import { useEffect, useState } from "react";
import UserData from "./components/UserData";
const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length)
        setUsers(data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchUsers(API);
  }, [])
  return <>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} />
      </tbody>
    </table>
  </>


}
export default App;