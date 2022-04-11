import { SearchableDropdown } from '@coopdigital/component-searchable-dropdown/src/index';
import Layout from 'components/layout';

const ComoboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <SearchableDropdown />
      </div>
      <div className="coop-form__row">
        <label htmlFor="">Another field</label>
        <input type="text" />
      </div>
    </Layout>
  );
};

export default ComoboboxPage;
