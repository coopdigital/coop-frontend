import { SearchableDropdown } from '@coopdigital/component-searchable-dropdown/src/index';
import { Layout } from '../../../components/Layout';

const ComboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <SearchableDropdown
          compact
          style={{ width: '300px' }}
          className="additional-class"
          label="This person is my..."
          id="relationship"
          options={[
            'Options props',
            'Child',
            'Grandchild',
            'Grandparent',
            'Parent',
            'Partner',
            'Spouse',
          ]}
          placeholder="Select option"
          onSelect={(value) => {
            console.log(value);
          }}
        />
      </div>
    </Layout>
  );
};

export default ComboboxPage;
