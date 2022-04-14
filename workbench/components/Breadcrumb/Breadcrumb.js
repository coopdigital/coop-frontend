import { useRouter } from 'next/router';
import Link from 'next/link';

export const generateBreadcrumbTrail = (path) => {
  const fragments = path.split('/').filter((fragment) => fragment);
  fragments.unshift('workbench');

  const trail = fragments.reduce((previous, current, index) => {
    const fragmentPath = index > 0 ? `${previous[index - 1].path}/${current}` : '';
    const isActive = index === fragments.length - 1;
    previous.push({ path: fragmentPath, label: current.replaceAll('-', ' '), isActive });
    return previous;
  }, []);

  // Because we set the basePath in next.config to /workbench but still want to render the first breadcrumb
  // Remember Next will prepend the basePath to all urls
  trail[0].path = '/';
  return trail;
};

export const Breadcrumb = () => {
  const router = useRouter();
  const breadcrumbTrail = generateBreadcrumbTrail(router.asPath);

  return (
    <div>
      {breadcrumbTrail.map((link) => {
        return (
          <PageLink link={link.path} label={link.label} key={link.path} active={link.isActive} />
        );
      })}
    </div>
  );
};

const PageLink = ({ label, link, active }) => {
  return (
    <span>
      <Link href={link}>
        <a className="coop-t-font-size-18 capitalize">{label}</a>
      </Link>
      {active ? '' : ' / '}
    </span>
  );
};
