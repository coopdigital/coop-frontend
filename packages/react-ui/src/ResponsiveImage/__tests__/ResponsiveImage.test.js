import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResponsiveImage from "../src/";

afterEach(cleanup);

describe("ResponsiveImage", () => {
  it("should render correctly", () => {
    const { container, getByAltText, getByTestId } = render(
      <ResponsiveImage src="src" alt="alt" />
    );
    expect(getByAltText("alt")).toBeInTheDocument();
  });

  it("should allow width and height attributes on default src", () => {
    const { container, getByAltText } = render(
      <ResponsiveImage src="src" alt="alt" width="120" height="120" />
    );
    expect(getByAltText("alt")).toHaveAttribute("width", "120");
    expect(getByAltText("alt")).toHaveAttribute("height", "120");
  });

  it("should render sources", () => {
    const sourcesTest = [
      {
        type: "image/webp",
        media: "(min-width: 1200)",
        srcSet: {
          "1x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=1200&amp;h=676",
          "2x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=1200&amp;h=676",
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
    const { getByAltText, getAllByTestId } = render(
      <ResponsiveImage src="src" alt="alt-test" sources={sourcesTest} />
    );

    expect(getByAltText("alt-test")).toBeInTheDocument();

    const sourceArray = getAllByTestId("test-picture-source");

    sourceArray.forEach((src) => {
      expect(src.hasAttribute("srcSet")).toBe(true);
    });

    expect(sourceArray[0].getAttribute("srcSet")).toContain(
      sourcesTest[0].srcSet["1x"]
    );
    expect(sourceArray[0].getAttribute("srcSet")).toContain(
      sourcesTest[0].srcSet["2x"]
    );
    expect(sourceArray[1].getAttribute("srcSet")).toContain(
      sourcesTest[1].srcSet["2x"]
    );
  });
});
