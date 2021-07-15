import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import LazyLoading from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<LazyLoading />);
        expect(container).toMatchSnapshot();
    })
    
})