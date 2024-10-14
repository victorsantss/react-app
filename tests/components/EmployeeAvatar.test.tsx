import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmployeeAvatar } from '../../src/view/components/EmployeeAvatar';
import '@testing-library/jest-dom/vitest';

describe('EmployeeAvatar', () => {
  it('renders the initials of the employee name', () => {
    const employeeName = 'John Doe Marshall';

    render(<EmployeeAvatar>{employeeName}</EmployeeAvatar>);

    const avatar = screen.getByText('JM');

    expect(avatar).toBeInTheDocument();
  })
  it('render the avatar with correct style', () => {
    const { container } = render(<EmployeeAvatar>Jane Smith</EmployeeAvatar>);

    const div = container.querySelector('div')!;
    expect(div).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    });
  })
})

