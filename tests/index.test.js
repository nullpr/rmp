import React from 'react';
import { screen, render, cleanup } from '@testing-library/react'
import App from '../src/components/App'

describe('App component', () => {
  beforeAll(() => {
    render(<App />)
  })

  it('should contain hello world message', () => {
    const message = 'Hello World';

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})