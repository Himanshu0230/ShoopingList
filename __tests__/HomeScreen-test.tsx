/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import {HomeScreen} from '../src/screens/HomeScreen';
 import {render, fireEvent} from '@testing-library/react-native';
 
it("renders default elements", () => {
    const { getAllByText, getByPlaceholderText } = render(<HomeScreen />);

    expect(getAllByText('My Items').length).toBe(1);
    getByPlaceholderText("Search");
})

it("shows list items on button press", () => {
    const { getByTestId,getByText } = render(<HomeScreen />);

    fireEvent.changeText(getByTestId("Search.input"), "Milk")

    fireEvent.press(getByTestId('Add.Button'));

    getByText("Milk");
})

it("deletes list items on button press", () => {
    const { getByTestId, getByText } = render(<HomeScreen />);

    fireEvent.changeText(getByTestId("Search.input"), "Milk")

    fireEvent.press(getByTestId('Add.Button'));

    getByText("Milk");

    fireEvent.press(getByText("Milk"));
})