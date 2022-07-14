import { SearchableDropdown } from '@coopdigital/component-searchable-dropdown/src/index';
import Layout from '../../../components/Layout';

const ComoboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <SearchableDropdown width="300px" />
      </div>
      <div className="coop-form__row">
        <label htmlFor="another-field">Another field</label>
        <input name="another-field" type="text" />
      </div>
    </Layout>
  );
};

export default ComoboboxPage;
