/* eslint-disable */
import Head from 'next/head';
import { Layout } from '../../../components/Layout';
import { EditorialCard } from '../../../components/EditorialCard';
import { Sandbox } from 'components/Sandbox';

const config = [
  {
    name: 'title',
    default: 'test title',
    type: 'text',
  },
  {
    name: 'label',
    default: 'label test',
    type: 'text',
  },
  { name: 'href', default: '#', type: 'text' },
  { name: 'isHorizontal', default: false, type: 'checkbox' },
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
