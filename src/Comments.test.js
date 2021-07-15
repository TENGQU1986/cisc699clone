import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import Comments from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<Comments />);
        expect(container).toMatchSnapshot();
    })
    
})