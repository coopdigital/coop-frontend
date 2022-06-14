import { useState } from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import { check } from 'prettier';

const EditorialCardPage = () => {
  const defaultImage =
    '//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg';
  const [title, setTitle] = useState(`Example editorial card`);
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [content, setContent] = useState(
    'In this content section is where we can have some text if you would like'
  );
  const [checked, setChecked] = useState(true);
  const [image, setImage] = useState(defaultImage);
  const [horizontal, setHorizontal] = useState(false);

  const getImage = () => {
    return image === '' ? defaultImage : image;
  };

  return (
    <>
      <Head></Head>
      <Layout>
        <section>
          <h1> Editorial Card</h1>
          <p className="coop-t-lead-p">
            An editorial card lets you highlight and link to more in-depth content on another page.
          </p>

          <h2 className='="coop-t-h3'>Guidelines</h2>
          <p>
            An editorial card should give people enough information to make an informed decision
            about whether or not to select it.<br></br> The whole card should link to one
            destination. Do not use buttons or links to any other destinations within an editorial
            card.
          </p>
        </section>

        <section className="coop-l-grid">
          <div className="coop-l-grid__item coop-l-grid__item--large-4 coop-l-grid__item--medium-6 coop-u-padding-t-24 coop-u-padding-b-24">
            <h2 className="coop-t-h3">Controls</h2>
            <label htmlFor="image">Has image </label>
            <input
              type="checkbox"
              style={{ width: '2rem', height: '1.5rem' }}
              value="image"
              defaultChecked={checked}
              id="image"
              onChange={(event) => setChecked(!checked)}
            ></input>
            <br />

            <label htmlFor="setImage">Image Url </label>
            <input
              value={image}
              style={{ width: '100%', height: '2rem' }}
              id="setImage"
              onChange={(event) => setImage(event.target.value)}
            ></input>
            <br />
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              style={{ width: '100%', height: '2rem' }}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></input>
            <br />

            <label htmlFor="subtitle">Subtitle</label>
            <input
              id="content"
              style={{ width: '100%', height: '2rem' }}
              value={subtitle}
              onChange={(event) => {
                setSubtitle(event.target.value);
              }}
            ></input>

            <label htmlFor="content">Content:</label>
            <input
              id="content"
              style={{ width: '100%', height: '2rem' }}
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            ></input>

            <br />
            <lable htmlFor="horizontal">Horizontal</lable>
            <input
              style={{ width: '2rem', height: '1.5rem' }}
              type="checkbox"
              value="hozirontal"
              defaultChecked={horizontal}
              id="horizontal"
              setHorizontal
              onChange={(event) => setHorizontal(!horizontal)}
            ></input>
          </div>
        </section>
        <h2 className="coop-t-h3">Live example</h2>
        <section className="coop-l-grid">
          <div className="coop-l-grid__item coop-l-grid__item--large-6 coop-l-grid__item--medium-6 coop-u-padding-t-24 coop-u-padding-b-24">
            <article
              className={
                `coop-c-editorialcard` + ` ${horizontal ? 'coop-c-editorialcard--horizontal' : ''}`
              }
            >
              <a
                className="coop-c-editorialcard__link"
                data-contenttype="Card|Editorial"
                data-contentparent=""
                data-linktext=""
              >
                <div className="coop-c-editorialcard__inner">
                  {checked && (
                    <figure className="coop-c-editorialcard__media">
                      <picture className="coop-c-editorialcard__image">
                        <source media="(min-width: 64em)" srcSet={getImage()} type="image/webp" />
                        <source srcSet={getImage()} type="image/webp" />

                        <source media="(min-width: 64em)" srcSet={getImage()} type="image/jpeg" />
                        <source srcSet={getImage} type="image/jpeg" />

                        <img srcSet={getImage()} width="618" height="346" alt="" />
                      </picture>
                    </figure>
                  )}
                  <div className="coop-c-editorialcard__content" style={{ paddingRight: '32px' }}>
                    <header className="coop-c-editorialcard__header">
                      {subtitle && <p class="coop-c-editorialcard__subtitle">{subtitle}</p>}
                      <p className="coop-c-editorialcard__title">{title}</p>
                    </header>
                    <div class="coop-c-editorialcard__body">{content}</div>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EditorialCardPage;
