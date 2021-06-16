/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, cleanup } from '@testing-library/react';

import ResponsiveImage from "../src/index";

afterEach(cleanup);

describe("ResponsiveImage", () => {
  it("should render correctly", () => {
    const wrapper = render(<ResponsiveImage src="src" alt="alt" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const { asFragment } = render(<ResponsiveImage src="src" alt="alt" />);
    const imageFragment = asFragment();
    expect(imageFragment).toMatchSnapshot();
  });

  it("should allow width and height attributes on default src", () => {
    const {asFragment} = render(<ResponsiveImage src="src" alt="alt" width="120" height="120" />);
    const imageFragmentWidthHeight = asFragment();
    expect(imageFragmentWidthHeight).toMatchSnapshot();
  });

  it("should render sources", () => {
    const sourcesTest = [
      {
        type: "image/webp",
        media: "(min-width: 1200)",
        srcSet: {
          "1x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
          "2x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
        },
      },
      {
        type: "image/webp",
        media: "(min-width: 600)",
        srcSet: {
          "1x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
          "2x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
        },
      },
    ];
    const {asFragment} = render(<ResponsiveImage src="src" alt="alt" sources={sourcesTest} />);
    const imageFragmentWithSourceSet = asFragment();
    expect(imageFragmentWithSourceSet).toMatchSnapshot();
  });
});
