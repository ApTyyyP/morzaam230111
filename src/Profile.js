import React from "react";

export default function Profile(props) {
  return (
    <>
      <article>
        <img src="" alt="" />
        <h2>{props.name}</h2>
        <h3>{props.username}</h3>
      </article>
    </>
  );
}
