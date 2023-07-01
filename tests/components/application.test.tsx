import * as React from 'react'
import { render, screen } from "@testing-library/react"
import {ApplicationComponent} from "../../sources/components/application.js"

test('renders learn react link', () => {
  render(<ApplicationComponent />)
  const linkElement = screen.getByText(/learn/i)

  expect(linkElement).toBeInTheDocument()
})
