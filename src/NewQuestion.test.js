import { render, fireEvent, screen } from '@testing-library/react';
import NewQuestion from './components/NewQuestion';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import reducer from './reducers'
import middleware from "./middleware";
import { createStore } from 'redux';

const store = createStore(reducer, middleware);

test('submit button is disabled when input-one and input-two fields are disabled', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQuestion />
            </Router>
        </Provider>
    );

    let inputOne = screen.getByPlaceholderText('Enter First Question');
    let inputTwo = screen.getByPlaceholderText('Enter Second Question');
    let submitButton = screen.queryByTestId('submit-button');
    expect(inputOne.value).toBe('');
    expect(inputTwo.value).toBe('');
    expect(submitButton.disabled).toBeTruthy();
});

test('when input-one is given to input field it correctly changes and displays updated value', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQuestion />
            </Router>
        </Provider>
    );

    let ele = screen.getByPlaceholderText('Enter First Question');

    fireEvent.change(ele, {
        target: { value: "OPTION1" }
    });

    expect(screen.queryByTestId('input-one').value).toBe('OPTION1')
});

test('when input-two is given to input field it correctly changes and displays updated value', () => {
    render(
        <Provider store={store}>
            <Router>
                <NewQuestion />
            </Router>
        </Provider>
    );

    let ele = screen.getByPlaceholderText('Enter Second Question');

    fireEvent.change(ele, {
        target: { value: "OPTION2" }
    });

    expect(screen.queryByTestId('input-two').value).toBe('OPTION2')
});

