import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('<Form /> component', () => {
  test('Form title is rendered', () => {
    render(<Form />);

    const formTitleElement = screen.getByText('ADD YOUR IMAGE');
    expect(formTitleElement).toBeInTheDocument();
  });

  test('Submit button is rendered', () => {
    render(<Form />);

    const submitButtonElem = screen.getByText('Submit');
    expect(submitButtonElem).toBeInTheDocument();
  });

  test('Title input is rendered', () => {
    render(<Form />);

    const titleInputElem = screen.getByPlaceholderText('Title', { exact: false });
    expect(titleInputElem).toBeInTheDocument();
  });

  test('Description input is rendered', () => {
    render(<Form />);

    const descrInputElem = screen.getByPlaceholderText('description', { exact: false });
    expect(descrInputElem).toBeInTheDocument();
  });

  test('URL input is rendered', () => {
    render(<Form />);

    const URLInputElem = screen.getByPlaceholderText('url', { exact: false });
    expect(URLInputElem).toBeInTheDocument();
  });

  test('Error text is rendered if user inputs invalid URL and clicks Submit btn', () => {
    render(<Form />);

    const URLInputElem = screen.getByPlaceholderText('url', { exact: false });
    const submitButtonElem = screen.getByRole('button');
    userEvent.type(URLInputElem, 'blaa');
    userEvent.click(submitButtonElem);
    const urlErrorText = screen.getByText('invalid', { exact: false });
    expect(urlErrorText).toBeInTheDocument();
  });
});
