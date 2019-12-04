import React, { useState } from "react";
import { isParameter } from "typescript";
import { useInput } from "./example";

const useInputText = parameter => {
  const [inputText, setInputText] = useState(parameter);

  const handleChanges = e => {
    setInputText(e.target.value);
  };

  return [inputText, setInputText, handleChanges];
};

const useTitle = parameter => {
  const [title, setTitle] = useState(parameter);

  const changeTitle = e => {
    e.preventDefault();
    setTitle(inputText);
    setInputText("");
  };
  return [title, setTitle, changeTitle];
};

const DynamicTitle = () => {
  const [
    inputTextComponent,
    setInputTextComponent,
    handleChanges
  ] = useInputText("");
  const [titleComponent, setTitleComponent, changeTitleComponent] = useTitle(
    ""
  );

  return (
    <div className="Wrapper">
      <h1 className="Title">{titleComponent}</h1>
      <form onSubmit={changeTitleComponent}>
        <div className="Input">
          <input
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handleChanges}
            placeholder="Create new title"
            type="text"
            value={inputTextComponent}
          />
          <label htmlFor="input" className="Input-label">
            New title
          </label>
        </div>
      </form>
    </div>
  );
};

export default DynamicTitle;
