import {
  SearchableDropdown,
  SearchableDropdownDownshift,
} from '@coopdigital/component-searchable-dropdown/src/index';
import Layout from '../../../components/Layout';

const ComoboboxPage = () => {
  return (
    <Layout>
      <div className="coop-form__row">
        <SearchableDropdownDownshift
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
      <div>
        <h3>Notes</h3>
        <p>
          The top combobox uses{' '}
          <a href="https://www.downshift-js.com/use-combobox">Downshift/useCombobox</a> and the
          bottom uses <a href="https://reach.tech/combobox/">@reach/combobox</a>.
        </p>
        <h4>Reach implementation</h4>
        <ul>
          <li>
            When typing, then deleting your input, the order in which items are selected using the
            keyboard is not preserved.
          </li>
          <li>
            When typing, then deleting your input, the full menu is not displayed until you interact
            with the input element again.
          </li>
        </ul>
        <h4>Downshift implementation</h4>
        <ul>
          <li>
            Downshift does not differentiate between keyboard or mouse focus out of the box, so we
            have followed the pattern used in the{' '}
            <a href="https://react.carbondesignsystem.com/?path=/story/components-dropdown--default">
              Carbon Filterable Multiselect
            </a>{' '}
            where the entire dropdown gets a focus ring rather than the individual items. Individual
            items still receive a hover/focus background colour. This is also more consistent with
            <a href="https://alphagov.github.io/accessible-autocomplete/examples/">
              Alphagov examples
            </a>{' '}
            (although they do not move the focus ring off the initial input element at all).
          </li>
          <li>
            Unlike Reach, downshift does not do partial word highlighting. We have found this
            behaviour is more consistent with best-practice examples around the web as the
            combination of bold and non-bold text within a single word is potentially confusing for
            users, especially those with dyslexia.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ComoboboxPage;
