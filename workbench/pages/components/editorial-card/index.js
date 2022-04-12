import { useState } from 'react';
import Head from 'next/head';
import Layout from '../../../components/tempLayout';

const EditorialCardPage = () => {
  const [title, setTitle] = useState(`
    <span>
      <h3>
        Find out the difference <span className="coop-u-nowrap">Co-op</span> makes as we celebrate 25 years of Fairtrade
      </h3>
    </span>
  `);

  return (
    <>
      <Head></Head>
      <Layout>
        <section>
          <h1> Editorial Card</h1>
          <p className="coop-t-lead-p">
            An editorial card lets you highlight and link to more in-depth
            content on another page.
          </p>
        </section>

        <section className="coop-u-padding-t-32">
          <p className="">npm install @coopdigital/editorialCard</p>
          <code>
            {
              '<EditorialCard title="Welcome to Co-op, buy some crisps! imgSrc="//image-url" />'
            }
          </code>
        </section>

        <section className="coop-l-grid">
          <div className="coop-l-grid__item coop-l-grid__item--large-4 coop-l-grid__item--medium-6 coop-u-margin-t-64">
            <article className="coop-c-editorialcard">
              <a
                className="coop-c-editorialcard__link"
                data-contenttype="Card|Editorial"
                data-contentparent=""
                data-linktext=""
              >
                <div className="coop-c-editorialcard__inner">
                  <figure className="coop-c-editorialcard__media">
                    <picture className="coop-c-editorialcard__image">
                      <source
                        media="(min-width: 64em)"
                        srcSet="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=webp&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346 1x"
                        type="image/webp"
                      />
                      <source
                        srcSet="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=webp&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346 1x"
                        type="image/webp"
                      />

                      <source
                        media="(min-width: 64em)"
                        srcSet="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=jpg&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346 1x"
                        type="image/jpeg"
                      />
                      <source
                        srcSet="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=jpg&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346 1x"
                        type="image/jpeg"
                      />

                      <img
                        src="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=jpg&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346"
                        width="618"
                        height="346"
                        alt=""
                      />
                    </picture>
                  </figure>
                  <div className="coop-c-editorialcard__content">
                    <header className="coop-c-editorialcard__header">
                      <div
                        className="coop-c-editorialcard__title"
                        dangerouslySetInnerHTML={{ __html: title }}
                      ></div>
                    </header>
                  </div>
                </div>
              </a>
            </article>
          </div>

          <div className="coop-l-grid__item coop-l-grid__item--large-4 coop-l-grid__item--medium-6 coop-u-margin-t-64">
            <p className="coop-t-lead-p">Controls</p>
            <p>Title:</p>
            <textarea
              style={{ width: '100%', height: '8rem' }}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></textarea>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditorialCardPage;
