/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { SearchableDropdown } from './SearchableDropdown.jsx';

describe('Searchable Dropdown', () => {
  it('renders a searchable dropdown', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );
    const dropdownContainer = document.querySelector('.coop-c-combobox');
    expect(dropdownContainer).toBeInTheDocument();
  });

  it('applies the compact class correctly', () => {
    render(
      <SearchableDropdown
        compact
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );
    const dropdownContainer = document.querySelector('.coop-c-combobox');
    expect(dropdownContainer).toHaveClass('compact');
  });

  it('renders the provided label', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );

    const dropdownLabel = screen.getByText('Choose a fruit');
    expect(dropdownLabel).toBeInTheDocument();
  });

  it('adds placeholder option if provided', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
        placeholder="Select option"
      />
    );
    const dropdownInput = document.querySelector('[role="combobox"] > input');
    expect(dropdownInput).toHaveAttribute('placeholder', 'Select option');
  });

  it('applies the label and id props correctly', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );

    const dropdownLabel = screen.getByText('Choose a fruit');
    const dropdownInput = document.querySelector('[role="combobox"] > input');

    expect(dropdownLabel).toHaveAttribute('for', 'fruits-input');
    expect(dropdownLabel).toHaveAttribute('id', 'fruits-label');

    expect(dropdownInput).toHaveAttribute('id', 'fruits-input');
    expect(dropdownInput).toHaveAttribute('aria-labelledby', 'fruits-label');
  });

  it('opens the searchable dropdown when clicking the label', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );
    const dropdownComponent = document.querySelector('[role="combobox"]');
    const dropdownLabel = screen.getByText('Choose a fruit');
    dropdownLabel.click();

    waitFor(() => {
      expect(dropdownComponent).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('forwards style props to the searchable dropdown wrapper', () => {
    render(
      <SearchableDropdown
        style={{ width: '300px', border: '2px solid hotpink' }}
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );

    const dropdownContainer = document.querySelector('.coop-c-combobox');
    expect(dropdownContainer).toHaveStyle({ width: '300px', border: '2px solid hotpink' });
  });

  it('forwards additional class names to the searchable dropdown wrapper', () => {
    render(
      <SearchableDropdown
        className="additional-class"
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );

    const dropdownContainer = document.querySelector('.coop-c-combobox');
    expect(dropdownContainer).toHaveClass('additional-class');
  });

  it('filters results when typing into the text field', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'apple again', 'orange', 'banana']}
      />
    );

    const dropdownPopover = document.querySelector('[role="listbox"]');
    const dropdownInput = document.querySelector('[role="combobox"] > input');

    fireEvent.change(dropdownInput, { target: { value: 'apple' } });

    const dropdownResults = dropdownPopover.querySelectorAll('li');

    waitFor(() => {
      expect(dropdownResults).toHaveLength(2);
      expect(screen.queryByText('orange')).not.toBeInTheDocument();
      expect(screen.queryByText('banana')).not.toBeInTheDocument();
    });
  });

  it('displays a no-results message when there are no matching options', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
      />
    );

    const dropdownInput = document.querySelector('[role="combobox"] > input');
    fireEvent.change(dropdownInput, { target: { value: 'pizza' } });
    waitFor(() => {
      expect(screen.getByText('No relevant options')).toBeInTheDocument();
    });
  });

  it('displays a custom no-results message if one is provided', () => {
    render(
      <SearchableDropdown
        label="Choose a fruit"
        id="fruits"
        options={['apple', 'orange', 'banana']}
        noResults="Custom message text"
      />
    );

    const dropdownInput = document.querySelector('[role="combobox"] > input');
    fireEvent.change(dropdownInput, { target: { value: 'pizza' } });
    waitFor(() => {
      expect(screen.getByText('Custom message text')).toBeInTheDocument();
    });
  });
});
