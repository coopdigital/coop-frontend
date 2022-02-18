import Header from './header';
import Breadcrumb from './breadcrumb';
export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="coop-l-container coop-u-padding-b-16 coop-u-padding-t-8">
        <Breadcrumb />
      </div>
      <main className="main-content coop-u-padding-b-32 coop-u-padding-t-32 coop-l-container">
        <div className="coop-l-container">{props.children}</div>
      </main>
    </>
  );
}
