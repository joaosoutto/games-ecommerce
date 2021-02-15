import React from 'react';

import CartView from '../CartView';
import renderWithRouter from '../../renderWithRouter';
import { fireEvent } from '@testing-library/react';

describe('Testing CartView Component', () => {
  test('Testing button tag and render', () => {
    const { getByText } = renderWithRouter(<CartView />);

    const btn = getByText('Ver Carrinho');

    expect(btn.tagName).toBe('BUTTON');

    expect(btn).toBeInTheDocument();
  });
  test('Testing total, subtotal and frete tag and render', () => {
    const { getByText } = renderWithRouter(<CartView />);

    const total = getByText(/Total/);
    expect(total.tagName).toBe('H3');
    expect(total).toBeInTheDocument();

    const Subtotal = getByText(/Subtotal/);
    expect(Subtotal.tagName).toBe('H3');
    expect(Subtotal).toBeInTheDocument();

    const Frete = getByText(/Frete/);
    expect(Frete.tagName).toBe('H3');
    expect(Frete).toBeInTheDocument();
  });
});
