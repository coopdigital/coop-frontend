/* eslint-disable */
import Head from 'next/head';
import { Layout } from '../../../components/Layout';
import { EditorialCard } from '../../../components/EditorialCard';
import { Sandbox } from 'components/Sandbox';

const config = [
  {
    name: 'title',
    value: 'Find out the difference Co-op makes as we celebrate 25 years of Fairtrade',
    type: 'text',
  },
  {
    name: 'label',
    value: 'Lorem ipsum dolor sit',
    type: 'text',
  },
  { name: 'href', value: '#', type: 'text' },
  { name: 'color', value: '--color-white', type: 'text' },
  { name: 'isHorizontal', value: false, type: 'checkbox' },
];

const EditorialCardPage = () => {
  return (
    <>
      <Head></Head>
      <Layout>
        <section>
          <Sandbox config={config}>
            <EditorialCard />
          </Sandbox>
        </section>
      </Layout>
    </>
  );
};

export default EditorialCardPage;

//           <Toggles props={{ default: { title: 'Test' }, fields: ['title'] }}>
