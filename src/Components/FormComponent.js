import React from "react";

export default function FormComponent({
  handleSubmit,
  titleName,
  error,
  setTitleName,
}) {
  return (
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="item">Enter the item name:</label>
      <input
        type="text"
        id="item"
        className="inputText"
        value={titleName}
        onChange={(e) => setTitleName(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>Please type something!!!</p>}
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
