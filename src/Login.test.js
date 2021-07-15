import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import Login from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<Login />);
        expect(container).toMatchSnapshot();
    })
    
})