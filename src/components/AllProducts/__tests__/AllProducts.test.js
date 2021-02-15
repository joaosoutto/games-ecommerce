import React from 'react';

import AllProducts from '../AllProducts';
import renderWithRouter from '../../renderWithRouter';

describe('Testing AllProducts Component', () => {
  test('Testing p tag and render', () => {
    const { getByText } = renderWithRouter(<AllProducts />);

    const p = getByText('Ordenar por:');

    expect(p.tagName).toBe('P');

    expect(p).toBeInTheDocument();
  });

  test('Testing buttons tag and render', () => {
    const { getByText } = renderWithRouter(<AllProducts />);

    const name = getByText('Nome');
    const price = getByText('Preço');
    const score = getByText('Nota');

    expect(name.tagName).toBe('BUTTON');
    expect(price.tagName).toBe('BUTTON');
    expect(score.tagName).toBe('BUTTON');

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});
