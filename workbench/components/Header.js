import Link from 'next/link';
import Logo from './coop-logo';

export default function Header() {
  return (
    <>
      <header
        className="coop-u-padding-t-16 coop-u-padding-b-8 main"
        style={{
          background: 'var(--color-brand-membership-blue-dark-1)',
          color: 'white',
          marginBottom: '.75rem',
        }}
      >
        <div className="coop-l-container">
          <Link href="/">
            <a className="coop-t-nounderline" style={{ color: 'white', fill: 'white' }}>
              <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                <span>
                  <Logo />
                </span>
                <strong style={{ margin: '-.5rem 0 0 1rem' }}>Component Workbench</strong>
              </div>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
