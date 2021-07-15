import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import Demo from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<Demo />);
        expect(container).toMatchSnapshot();
    })
    
})