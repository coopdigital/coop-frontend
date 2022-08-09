import { SearchableDropdown } from '@coopdigital/component-searchable-dropdown/src/index';
import { Sandbox } from 'components/Sandbox';
import { Layout } from '../../../components/Layout';

const defaultOptions = ['watermelon', 'mango', 'apple', 'banana', 'orange'];

const config = [
  { name: 'compact', type: 'checkbox', value: true },
  { name: 'label', type: 'text', value: 'Choose a fruit' },
  { name: 'options', type: 'text', value: defaultOptions, proptype: 'array' },
  { name: 'noResults', type: 'text', value: 'No relevant options' },
  { name: 'placeholder', type: 'text', value: 'Select an option' },
];

const ComboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <Sandbox config={config}>
          <SearchableDropdown id="dropdown" label="Dropdown label" options={defaultOptions} />
        </Sandbox>
      </div>
    </Layout>
  );
};

export default ComboboxPage;
