import Link from 'next/link';
import Logo from './coop-logo';

export default function Header() {
  return (
    <>
      <header
        className="coop-u-padding-t-16 coop-u-padding-b-8 main"
        style={{
          background: 'var(--color-blue-dark-3)',
          color: 'white',
          boxShadow: '0 2px 10px rgb(0 0 0 / 0.15)',
          marginBottom: '1rem',
        }}
      >
        <div className="coop-l-container">
          <div className="coop-l-container">
            <Link href="/">
              <a
                className="coop-t-nounderline"
                style={{ color: 'white', fill: 'white' }}
              >
                <div className="coop-l-grid">
                  <div>
                    <Logo />
                  </div>
                  <div>
                    <div className="coop-l-grid__item coop-u-padding-t-4">
                      Workbench
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
