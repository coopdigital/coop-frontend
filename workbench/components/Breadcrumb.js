import { useRouter } from 'next/router';
import Link from 'next/link';

const filterEmpty = (el) => el !== '';
const isCurrentPage = (index, list) => index === list.length - 1;

function formatRouteLabel(label) {
  if (label === '' || label === '/') {
    return label;
  }
  return label.split('#')[0].replaceAll('-', ' ');
}

function getRoutes(path) {
  let subRoute = path.split('/');
  const routes = subRoute.map((element) => `${element}`);
  subRoute[0] = 'workbench';
  for (let i = 1; i < routes.length; i++) {
    routes[i] = `${routes[i - 1]}/${routes[i]}`;
  }
  subRoute = subRoute.map((label) => formatRouteLabel(label));
  subRoute = subRoute.filter(filterEmpty);
  routes[0] = '/';

  return [[...new Set(routes.filter(filterEmpty))], subRoute];
}

export default function Breadcrumb() {
  const router = useRouter();
  const [breadcrumbLinks, breadcrumbLabel] = getRoutes(router.asPath);

  return (
    <div>
      {breadcrumbLinks.map((link, index, array) => {
        return (
          <PageLink
            link={link}
            active={isCurrentPage(index, array)}
            label={breadcrumbLabel[index]}
            key={breadcrumbLabel[index]}
          />
        );
      })}
    </div>
  );
}

const PageLink = ({ label, link }) => {
  return (
    <Divider>
      <Link href={link}>
        <a className="coop-t-font-size-18 capitalize" href={link}>
          {label}
        </a>
      </Link>
    </Divider>
  );
};

const Divider = ({ children }) => {
  return (
    <span>
      {children} {'/'}{' '}
    </span>
  );
};
