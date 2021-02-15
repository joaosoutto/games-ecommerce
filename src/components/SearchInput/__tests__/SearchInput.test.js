import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../SearchInput';

describe('Testing SearchInput Component', () => {
  test('Testing search input render', () => {
    const { getByPlaceholderText } = render(<SearchInput />);

    const input = getByPlaceholderText('Buscar jogo...');
    expect(input.tagName).toBe('INPUT');

    expect(input).toBeInTheDocument();
  });
});
