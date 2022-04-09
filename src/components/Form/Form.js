import React, { useState } from "react";
import Input from "../Input";

import classes from "./Form.module.scss";

import { validateForm } from "../../helpers/form-validation";

const Form = () => {
  const [title, setTitle] = useState({ value: "", helperText: "" });
  const [description, setDescription] = useState({ value: "", helperText: "" });
  const [url, setUrl] = useState({ value: "", helperText: "" });

  const handleTitleChange = (e) => {
    setTitle((prevState) => ({ ...prevState, value: e.target.value }));
  };
  const handleDescriptionChange = (e) => {
    setDescription((prevState) => ({ ...prevState, value: e.target.value }));
  };
  const handleUrlChange = (e) => {
    setUrl((prevState) => ({ ...prevState, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formIsValid = validateForm(
      title,
      description,
      url,
      setTitle,
      setDescription,
      setUrl
    );
    console.log(formIsValid);
  };

  const btnIsEnabled =
    title.value.trim().length > 0 &&
    description.value.trim().length > 0 &&
    url.value.trim().length > 0;

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title.value}
        helperText={title.helperText}
        onChange={handleTitleChange}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description.value}
        helperText={description.helperText}
        onChange={handleDescriptionChange}
      />
      <Input
        type="text"
        placeholder="URL"
        value={url.value}
        helperText={url.helperText}
        onChange={handleUrlChange}
      />
      <button className={classes.submit}>Submit</button>
    </form>
  );
};

export default Form;
