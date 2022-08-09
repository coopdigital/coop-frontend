import { useRouter } from 'next/router';
import Link from 'next/link';

export const generateBreadcrumbTrail = (path) => {
  const fragments = path.split('/').filter((fragment) => fragment);
  fragments.unshift('workbench');

  const trail = fragments.reduce((trailArray, current, index) => {
    const fragmentPath = index > 0 ? `${trailArray[index - 1].path}/${current}` : '';
    const isActive = index === fragments.length - 1;
    trailArray.push({ path: fragmentPath, label: current.replace(/-/g, ' '), isActive });
    return trailArray;
  }, []);

  // Because we set the basePath in next.config to /workbench but still want to render the first breadcrumb
  // Remember Next will prepend the basePath to all urls
  trail[0].path = '/';
  trail[0].label = 'home';
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
    <span className="wb-breadcrumb coop-t-font-size-16">
      <Link href={link}>
        <a className="coop-t-nounderline capitalize">
          <strong>{label}</strong>
        </a>
      </Link>
      {active ? '' : ' / '}
    </span>
  );
};
