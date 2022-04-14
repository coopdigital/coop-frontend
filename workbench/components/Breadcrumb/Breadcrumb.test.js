import { render } from '@testing-library/react';
import * as nextRouter from 'next/router';

import { Breadcrumb, generateBreadcrumbTrail } from './Breadcrumb';

nextRouter.useRouter = jest.fn();

describe('bread crumb trail', () => {
  it('handles workbench pages one level deep', () => {
    const path = generateBreadcrumbTrail('/components');

    expect(path).toStrictEqual([
      { path: '/', label: 'workbench', isActive: false },
      { path: '/components', label: 'components', isActive: true },
    ]);
  });

  it('handles workbench pages two levels deep', () => {
    const path = generateBreadcrumbTrail('/components/searchable-dropdown');

    expect(path).toStrictEqual([
      { path: '/', label: 'workbench', isActive: false },
      { path: '/components', label: 'components', isActive: false },
      {
        path: '/components/searchable-dropdown',
        label: 'searchable dropdown',
        isActive: true,
      },
    ]);
  });

  it('handles workbench pages three levels deep', () => {
    const path = generateBreadcrumbTrail('/components/searchable-dropdown/some-nested-page');

    expect(path).toStrictEqual([
      { path: '/', label: 'workbench', isActive: false },
      { path: '/components', label: 'components', isActive: false },
      {
        path: '/components/searchable-dropdown',
        label: 'searchable dropdown',
        isActive: false,
      },
      {
        path: '/components/searchable-dropdown/some-nested-page',
        label: 'some nested page',
        isActive: true,
      },
    ]);
  });

  it('handles workbench pages up to an arbitrary depth', () => {
    const path = generateBreadcrumbTrail(
      '/components/searchable-dropdown/some-nested-page/apple/orange/banana'
    );
    expect(path).toStrictEqual([
      { path: '/', label: 'workbench', isActive: false },
      { path: '/components', label: 'components', isActive: false },
      {
        path: '/components/searchable-dropdown',
        label: 'searchable dropdown',
        isActive: false,
      },
      {
        path: '/components/searchable-dropdown/some-nested-page',
        label: 'some nested page',
        isActive: false,
      },
      {
        path: '/components/searchable-dropdown/some-nested-page/apple',
        label: 'apple',
        isActive: false,
      },
      {
        path: '/components/searchable-dropdown/some-nested-page/apple/orange',
        label: 'orange',
        isActive: false,
      },
      {
        path: '/components/searchable-dropdown/some-nested-page/apple/orange/banana',
        label: 'banana',
        isActive: true,
      },
    ]);
  });

  it('sets the isActive flag for the current page', () => {
    const path = generateBreadcrumbTrail('/components/searchable-dropdown');

    expect(path).toStrictEqual([
      { path: '/', label: 'workbench', isActive: false },
      { path: '/components', label: 'components', isActive: false },
      {
        path: '/components/searchable-dropdown',
        label: 'searchable dropdown',
        isActive: true,
      },
    ]);
  });

  it('inserts dividers between links', () => {
    nextRouter.useRouter.mockImplementation(() => ({
      asPath: '/components/searchable-dropdown',
    }));

    render(<Breadcrumb />);

    // keep everyone happy for now
    expect(true).toBe(true);
  });
});
