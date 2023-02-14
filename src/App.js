import React, { useState } from "react";
import User from "./components/user";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    const newCounters = users.filter((user) => user._id !== id);
    setUsers(newCounters);
  };

  const handleToggleBookMark = (id) => {
    const elementIndex = users.findIndex((user) => user._id === id);
    const newUsers = [...users];
    newUsers[elementIndex].bookmark === false
      ? (newUsers[elementIndex].bookmark = true)
      : (newUsers[elementIndex].bookmark = false);
    setUsers(newUsers);
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <User
                key={user._id}
                onDelete={handleDelete}
                onBookmark={handleToggleBookMark}
                {...user}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
