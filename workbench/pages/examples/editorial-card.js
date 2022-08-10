import { Layout } from '../../components/Layout';
import { EditorialCard } from '../../components/EditorialCard';

export default function EditorialCardExamplePage() {
  return (
    <Layout>
      <section className="coop-l-grid">
        <div className="coop-l-grid__item coop-l-grid__item--large-4 coop-l-grid__item--medium-6">
          <h1>Examples</h1>
          <h3>Default</h3>
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            href="#"
          />
          <h3>With a subtitle</h3>
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
          />
          <h3>With a paragraph</h3>
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
          >
            <p>
              Join us in celebrating 25 years of Fairtrade by enjoying products that carry the
              Fairtrade Mark, or holding your own Fairtrade party.
            </p>
          </EditorialCard>
        </div>
        <div className="coop-l-grid__item">
          <h3>Full width</h3>
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
            isHorizontal
          />
        </div>
      </section>
      <h3>Grid layouts</h3>
      <section className="coop-l-grid">
        <div className="coop-l-grid__item coop-l-grid__item--medium-6">
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
          />
        </div>
        <div className="coop-l-grid__item coop-l-grid__item--medium-6">
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
          />
        </div>
      </section>
      <section className="coop-l-grid">
        <div className="coop-l-grid__item coop-l-grid__item--medium-4">
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
          />
        </div>
        <div className="coop-l-grid__item coop-l-grid__item--medium-4">
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
          />
        </div>
        <div className="coop-l-grid__item coop-l-grid__item--medium-4">
          <EditorialCard
            title="Find out the difference Co-op makes as we celebrate 25 years of Fairtrade"
            label="Fairtrade"
            href="#"
          />
        </div>
      </section>
    </Layout>
  );
}
