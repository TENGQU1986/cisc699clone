import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import RedisCacheDemo from "./Comments";

describe('rendering correctly', () => {

    it('should render correctly', () => {
        const { container } = render(<RedisCacheDemo />);
        expect(container).toMatchSnapshot();
    })
    
})