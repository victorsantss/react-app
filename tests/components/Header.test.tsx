import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../../src/view/components/Header';
import '@testing-library/jest-dom/vitest';

describe('Header', () => {
  it('should render header links', () => {
    const linkUrls: string[] = ['/', '/funcionarios'];

    render(<Header />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);

    linkUrls.forEach((url, index) => {
      expect(links[index]).toHaveAttribute('href', url);
    });
  })
})
