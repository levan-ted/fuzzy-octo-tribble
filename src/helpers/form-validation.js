export const validateForm = (
  title,
  description,
  url,
  setTitle,
  setDescription,
  setUrl
) => {
  const isValid = { title: true, description: true, url: true };

  if (title.value.trim() === "") {
    setTitle((prevState) => ({
      ...prevState,
      helperText: "*required",
    }));
    isValid.title = false;
  } else {
    setTitle((prevState) => ({
      ...prevState,
      helperText: "",
    }));
    isValid.title = true;
  }

  if (description.value.trim() === "") {
    setDescription((prevState) => ({
      ...prevState,
      helperText: "*required",
    }));
    isValid.description = false;
  } else {
    setDescription((prevState) => ({
      ...prevState,
      helperText: "",
    }));
    isValid.description = true;
  }

  if (url.value.trim() === "") {
    setUrl((prevState) => ({
      ...prevState,
      helperText: "*required",
    }));
    isValid.url = false;
  } else if (
    !url.value.startsWith("http://") &&
    !url.value.startsWith("https://")
  ) {
    setUrl((prevState) => ({
      ...prevState,
      helperText: "invalid URL",
    }));
    isValid.url = false;
  } else {
    setUrl((prevState) => ({
      ...prevState,
      helperText: "",
    }));
    isValid.url = true;
  }

  const formIsValid = isValid.title && isValid.description && isValid.url;

  return formIsValid;
};
