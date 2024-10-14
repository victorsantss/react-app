import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmployeesTableFilter } from '../../src/view/components/EmployeesTableFilter';
import { describe, it, expect } from 'vitest';

describe('EmployeesTableFilter', () => {
  it('renders the filter component correctly', () => {
    render(<EmployeesTableFilter onFilterSubmit={() => { }} />);

    expect(screen.getByText('SAJ')).toBeInTheDocument();

    expect(screen.getByLabelText('Tipo de Filtro')).toBeInTheDocument();
    expect(screen.getByLabelText('Digite...')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /procurar/i })).toBeInTheDocument();
  });
});
