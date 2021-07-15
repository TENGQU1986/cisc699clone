import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import Comment from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<Comment />);
        expect(container).toMatchSnapshot();
    })
    
})