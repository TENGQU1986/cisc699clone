import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import ClientSide from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<ClientSide />);
        expect(container).toMatchSnapshot();
    })
    
})