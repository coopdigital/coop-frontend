import Combobox from 'components/Combobox';
import Layout from 'components/layout';

const ComoboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <Combobox />
      </div>
      <div className="coop-form__row">
        <label htmlFor="">Another field</label>
        <input type="text" />
      </div>
    </Layout>
  );
};

export default ComoboboxPage;
