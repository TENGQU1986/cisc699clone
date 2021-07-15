import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import ChildWithoutMemo from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<ChildWithoutMemo />);
        expect(container).toMatchSnapshot();
    })
    
})