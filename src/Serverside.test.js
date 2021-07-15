import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import ServerSide from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<ServerSide />);
        expect(container).toMatchSnapshot();
    })
    
})