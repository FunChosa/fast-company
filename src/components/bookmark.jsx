import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return status === false ? (
    <i className="bi bi-bookmark"></i>
  ) : (
    <i className="bi bi-bookmark-fill"></i>
  );
};

export default Bookmark;
