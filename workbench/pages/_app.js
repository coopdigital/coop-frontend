import '@coopdigital/foundations/dist/vars/vars.css';
import '@coopdigital/foundations/dist/foundations.css';
import '@coopdigital/component-card/dist/card.css';
import '@coopdigital/shared-component--editorialCard/dist/editorialCard.css';
import '../styles/global.css';
function MyApp({ Component, pageProps }) {
  return (
    <div style={{ background: 'var(--color-grey-neutral-light)' }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
