import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ background: 'var(--color-grey-neutral-light)' }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
