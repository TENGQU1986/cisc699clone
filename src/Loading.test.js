import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import Loading from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<Loading />);
        expect(container).toMatchSnapshot();
    })
    
})