import Link from 'next/link';
import Logo from './coop-logo';

export function Header() {
  return (
    <>
      <header className="wb-header coop-u-padding-t-16 coop-u-padding-b-8 main ">
        <div className="coop-l-container">
          <Link href="/">
            <a className="wb-header-link">
              <div className="wb-header-inner">
                <span>
                  <Logo />
                </span>
                <strong>Component Workbench</strong>
              </div>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
