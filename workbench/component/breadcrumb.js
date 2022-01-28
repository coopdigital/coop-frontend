import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Breadcrumb() {
  const router = useRouter();

  const filterEmpty = (el) => el !== '';
  function formatLabel(label) {
    if (label == '' || label == '/') {
      return label;
    }

    const hashSplit = label.split('#');
    const dashSplit = hashSplit[0].split('-');

    const upperCase = dashSplit.map(
      (word) => `${word[0].toUpperCase()}${word.slice(1)}`
    );

    return upperCase.join(' ');
  }

  function getRoutes() {
    let subRoute = router.asPath.split('/');
    let routes = subRoute.map((element) => `${element}`);
    subRoute[0] = 'workbench';
    for (let i = 1; i < routes.length; i++) {
      routes[i] = `${routes[i - 1]}/${routes[i]}`;
    }
    subRoute = subRoute.map((i) => formatLabel(i));
    subRoute = subRoute.filter(filterEmpty);
    routes[0] = '/';
    routes = routes.filter(filterEmpty);
    return [[...new Set(routes)], subRoute];
  }
  const [breadcrumbLinks, breadcrumbLabel] = getRoutes();
  const isCurrentPage = (index, list) => index === list.length - 1;

  return (
    <div>
      {breadcrumbLinks.map((link, index, array) =>
        isCurrentPage(index, array) ? (
          <PageSignPost
            label={breadcrumbLabel[index]}
            key={breadcrumbLabel[index]}
          />
        ) : (
          <PageLink
            link={link}
            label={breadcrumbLabel[index]}
            key={breadcrumbLabel[index]}
          />
        )
      )}
    </div>
  );
}
function PageSignPost(props) {
  return (
    <Divider>
      <span className="coop-t-font-size-18">{props.label} </span>
    </Divider>
  );
}
function PageLink(props) {
  return (
    <Divider>
      <Link href={props.link}>
        <a className="coop-t-font-size-18" href={props.link}>
          {props.label}
        </a>
      </Link>
    </Divider>
  );
}

function Divider(props) {
  return (
    <span>
      {props.children} {'/'}{' '}
    </span>
  );
}
