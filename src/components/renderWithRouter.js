import React from 'react';
import { render } from '@testing-library/react';
import { AppContext, AppProvider } from '../context/AppContext';

const renderWithRouter = (component) => {
  return {
    ...render(<AppProvider value={AppContext}>{component}</AppProvider>),
  };
};

export default renderWithRouter;
