import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Index from '../pages/index'

describe('Index', () => {
  test('displays the heading', async () => {
    render(<Index blogs={[{ id: 'ok', slug: 'ok', title: 'My Blog', date: '01-01-2001' }]} />)

    screen.getByText('General Strike')
    screen.getByText('My Blog (01-01-2001)')
  })
})
