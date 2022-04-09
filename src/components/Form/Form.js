import React, { useState, useContext } from "react";
import { dataContext } from "../../contexts/data-context";
import Input from "../Input";

import classes from "./Form.module.scss";

import { validateForm } from "../../helpers/form-validation";
import { postData } from "../../services/data-fetching";
import Loader from "../Loader";

const MOCK_DATA = [
  {
    title: "Level up",
    description: "Level up",
    imagePath:
      "https://images.unsplash.com/photo-1568659358810-bdbdb4decb5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmVvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Game on",
    description: "Game on",
    imagePath:
      "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bmVvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Hi",
    description: "Hi",
    imagePath:
      "https://images.unsplash.com/photo-1495069781661-dfeacdef0531?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG5lb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Do something great",
    description: "Do something great",
    imagePath:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG5lb258ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Stay wired",
    description: "Stay wired",
    imagePath:
      "https://images.unsplash.com/photo-1563240381-5ccf7690ca08?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fG5lb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Do what you love",
    description: "Do what you love",
    imagePath:
      "https://images.unsplash.com/photo-1554290712-e640351074bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fG5lb258ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Ready or not",
    description: "Ready or not",
    imagePath:
      "https://images.unsplash.com/photo-1581300740943-cfa5f847db2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fG5lb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Pizza",
    description: "Pizza",
    imagePath:
      "https://images.unsplash.com/photo-1542587222-f9172e5eba29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODR8fG5lb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Hello",
    description: "Hello",
    imagePath:
      "https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA0fHxuZW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Good times",
    description: "Good times",
    imagePath:
      "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHxuZW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Make beer, not war",
    description: "Make beer, not war",
    imagePath:
      "https://images.unsplash.com/photo-1577032229840-33197764440d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc5fHxuZW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "You're doing great",
    description: "You're doing great",
    imagePath:
      "https://images.unsplash.com/photo-1572633424705-d813d2fb5cb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2811&q=80",
  },
  {
    title: "Ready or not",
    description: "Ready or not",
    imagePath:
      "https://images.unsplash.com/photo-1581300740943-cfa5f847db2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "Steak & wine",
    description: "Steak & wine",
    imagePath:
      "https://images.unsplash.com/photo-1545464333-9cbd1f263aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "We belong here",
    description: "We belong here",
    imagePath:
      "https://images.unsplash.com/photo-1587183233478-0acdba5b184a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    title: "Burger",
    description: "Burger",
    imagePath:
      "https://images.unsplash.com/photo-1563191799-2c7e8c185bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "Yeah",
    description: "Yeah",
    imagePath:
      "https://images.unsplash.com/photo-1606595885348-ba270cb254d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    title: "Avengers",
    description: "Avengers",
    imagePath:
      "https://images.unsplash.com/photo-1560932684-5e552e2894e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc1fHxuZW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Yes",
    description: "Yes",
    imagePath:
      "https://images.unsplash.com/photo-1584844308364-9e43f2cfaa6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    title: "We believe",
    description: "We believe",
    imagePath:
      "https://images.unsplash.com/photo-1582478192200-b4bd08b40096?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1790&q=80",
  },
];

const Form = () => {
  const ctx = useContext(dataContext);
  const [title, setTitle] = useState({ value: "", helperText: "" });
  const [description, setDescription] = useState({ value: "", helperText: "" });
  const [url, setUrl] = useState({ value: "", helperText: "" });
  const [loading, setLoading] = useState(false);
  const [formTitle, setFormTitle] = useState("ADD YOUR IMAGE");

  const handleTitleChange = (e) => {
    setTitle((prevState) => ({ ...prevState, value: e.target.value }));
  };
  const handleDescriptionChange = (e) => {
    setDescription((prevState) => ({ ...prevState, value: e.target.value }));
  };
  const handleUrlChange = (e) => {
    setUrl((prevState) => ({ ...prevState, value: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formIsValid = validateForm(
      title,
      description,
      url,
      setTitle,
      setDescription,
      setUrl
    );

    if (formIsValid) {
      const newCard = {
        description: description.value,
        title: title.value,
        imagePath: url.value,
        size: 1,
      };
      try {
        setLoading(true);
        const res = await postData(MOCK_DATA);
        // const res = await postData([newCard, ...ctx.data]);
        console.log(res);
        if (res.ok) {
          ctx.addCard(newCard);
          setTitle({ value: "", helperText: "" });
          setDescription({ value: "", helperText: "" });
          setUrl({ value: "", helperText: "" });
          setLoading(false);
          setFormTitle("Image was added!");
        }
      } catch (err) {
        setLoading(false);
        setFormTitle(err.message);
      }
    }
  };

  const btnIsEnabled =
    title.value.trim().length > 0 &&
    description.value.trim().length > 0 &&
    url.value.trim().length > 0;

  if (loading)
    return (
      <div className={classes["loader-container"]}>
        <Loader />
      </div>
    );

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2 className={classes.title}>{formTitle}</h2>
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
