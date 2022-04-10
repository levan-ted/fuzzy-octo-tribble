import React, { useState, useContext } from 'react';

import { dataContext } from '../../contexts/data-context';
import Input from '../Input';

import classes from './Form.module.scss';

import { validateForm } from '../../helpers/form-validation';
import { postData } from '../../services/data-fetching';
// import { MOCK_DATA } from "../../constants/mock-data";
import Loader from '../Loader';

const Form = () => {
  const ctx = useContext(dataContext);
  const [title, setTitle] = useState({ value: '', helperText: '' });
  const [description, setDescription] = useState({ value: '', helperText: '' });
  const [url, setUrl] = useState({ value: '', helperText: '' });
  const [loading, setLoading] = useState(false);
  const [formTitle, setFormTitle] = useState('ADD YOUR IMAGE');
  const [submitted, setSubmitted] = useState(false);

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

    const formIsValid = validateForm(title, description, url, setTitle, setDescription, setUrl);

    if (formIsValid) {
      const newCard = {
        description: description.value,
        title: title.value,
        imagePath: url.value,
        size: 1
      };
      try {
        setLoading(true);
        // const res = await postData(MOCK_DATA);
        const res = await postData([newCard, ...ctx.data]);
        if (res.ok) {
          ctx.addCard(newCard);
          setTitle({ value: '', helperText: '' });
          setDescription({ value: '', helperText: '' });
          setUrl({ value: '', helperText: '' });
          setLoading(false);
          setFormTitle('Image was added!');
          setSubmitted(true);
        } else {
          setLoading(false);
          setFormTitle('ERROR: ' + res.statusText);
          setSubmitted(true);
        }
      } catch (err) {
        setLoading(false);
        setFormTitle(err.message);
      }
    }
  };

  if (loading)
    return (
      <div className={classes['loader-container']}>
        <Loader />
      </div>
    );

  if (submitted)
    return (
      <div className={classes['loader-container']}>
        <h6>{formTitle}</h6>
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
        placeholder="Image URL"
        value={url.value}
        helperText={url.helperText}
        onChange={handleUrlChange}
      />
      <button className={classes.submit}>Submit</button>
    </form>
  );
};

export default Form;
