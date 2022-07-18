/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { SearchableDropdown } from './SearchableDropdown.jsx';

describe('Searchable Dropdown', () => {
  it('renders a dropdown', () => {
    render(
      <SearchableDropdown label="fruits" id="fruits" options={['apple', 'orange', 'banana']} />
    );
    const dropdownContainer = document.querySelector('.coop-c-combobox');
    expect(dropdownContainer).toBeInTheDocument();
  });
});
