import { SearchableDropdown } from '@coopdigital/component-searchable-dropdown/src/index';
import Layout from '../../../components/tempLayout';

const ComoboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <SearchableDropdown />
      </div>
      <div className="coop-form__row">
        <label htmlFor="another-field">Another field</label>
        <input name="another-field" type="text" />
      </div>
    </Layout>
  );
};

export default ComoboboxPage;
