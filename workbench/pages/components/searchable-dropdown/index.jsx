import {
  SearchableDropdown,
  SearchableOption,
} from '@coopdigital/component-searchable-dropdown/src/index';
import Layout from '../../../components/Layout';

const ComoboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <SearchableDropdown width="300px" label="This person is my..." id="relationship">
          <SearchableOption value="Child" />
          <SearchableOption value="Grandchild" />
          <SearchableOption value="Grandparent" />
          <SearchableOption value="Parent" />
          <SearchableOption value="Partner" />
          <SearchableOption value="Spouse" />
        </SearchableDropdown>
      </div>
      <div className="coop-form__row">
        <label htmlFor="another-field">Another field</label>
        <input name="another-field" type="text" />
      </div>
    </Layout>
  );
};

export default ComoboboxPage;
