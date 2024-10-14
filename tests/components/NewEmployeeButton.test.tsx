import React from 'react';
import { it, expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import { NewEmployeeButton } from '../../src/view/components/NewEmployeeButton';
import '@testing-library/jest-dom/vitest';

describe('NewEmployeeButton', () => {
  it('render the fab with correct style', () => {
    const { container } = render(<NewEmployeeButton />);

    const button = container.querySelector('button')!;

    expect(button).toHaveStyle({
      marginTop: '16px',
      float: 'right',
      right: '24px'
    });
    expect(button).toHaveAttribute('aria-label', 'add');
  })

  it('render the fab with correct icon', () => {
    const { container } = render(<NewEmployeeButton />);
    const icon = container.querySelector('svg')!;

    expect(icon).toBeInTheDocument();
  })
})

