import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const titles = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился,раз",
    "Оценка",
    "",
  ];
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((item) => item._id !== userId));
  };

  const renderPhrase = (number) => {
    switch (number) {
      case 0:
        return "Никто с тобой не тусанет";
      case 2:
      case 3:
      case 4:
        return `${number} человека тусанут с тобой сегодня`;
      default:
        return `${number} человек тусанет с тобой сегодня`;
    }
  };

  const renderTitles = () => {
    //рисуем шапку таблицы
    return (
      titles.length !== 0 &&
      titles.map((title) => (
        <th key={title} scope="col">
          {title}
        </th>
      ))
    );
  };

  const getBadgeClasses = () => {
    let classes = "badge ";
    classes += users.length === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  const getLabel = () => {
    return (
      <>
        <h2>
          <span className={getBadgeClasses()}>
            {renderPhrase(users.length)}
          </span>
        </h2>
      </>
    );
  };

  const renderQualities = (user) => {
    const classes = "p-1 m-1 badge bg-";
    return user.qualities.map(
      (
        element //ругается на отсутствие ключа. пустой тег без ключа низя
      ) => (
        <React.Fragment key={element._id}>
          <td className={classes + element.color}>{element.name}</td>
        </React.Fragment>
      )
    );
  };

  const renderUsers = () => {
    return (
      users.length !== 0 &&
      users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          {/* <React.Fragment key={user._id}> */}
          {renderQualities(user)}
          {/* </React.Fragment> */}
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <button
              className="btn btn-danger btn-sm m-1"
              onClick={() => handleDelete(user._id)}
            >
              delete
            </button>
          </td>
        </tr>
      ))
    );
  };

  if (users.length !== 0) {
    return (
      <>
        {getLabel()}
        <table className="table">
          <thead>
            <tr>{renderTitles()}</tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </>
    );
  }
  return getLabel();
};

export default Users;
