import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
  return (
    <>
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>
          {props.qualities.map((item) => (
            <Qualitie {...item} key={item._id} />
          ))}
        </td>
        <td>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate} /5</td>
        <td>
          <button
            onClick={() => props.onBookmark(props._id)}
            className="btn btn-secondary"
          >
            <Bookmark status={props.bookmark} />
          </button>
        </td>
        <td>
          <button
            onClick={() => props.onDelete(props._id)}
            className="btn btn-danger"
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
