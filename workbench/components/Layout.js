import Header from './Header';
import { Breadcrumb } from './Breadcrumb';

export default function Layout(props) {
  return (
    <>
      <Header />
      <div
        style={{ borderBottom: '1px solid #ccc' }}
        className="coop-u-margin-b-16 coop-u-padding-b-16"
      >
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
