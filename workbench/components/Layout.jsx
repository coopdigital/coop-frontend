import { Header } from './Header';
import { Breadcrumb } from './Breadcrumb';

export function Layout(props) {
  return (
    <>
      <Header />
      <div className="wb-header-bottom coop-u-margin-b-16 coop-u-padding-b-16">
        <div className="coop-l-container">
          <Breadcrumb />
        </div>
      </div>
      <main className="">
        <div className="coop-l-container">{props.children}</div>
      </main>
    </>
  );
}
