import React from "react";
// import { mount } from "enzyme";
// import renderer from "react-test-renderer";
import { render, cleanup, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResponsiveImage from "../src/index";

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
    const { getByAltText, getByTestId, getAllByTestId } = render(
      <ResponsiveImage src="src" alt="alt" sources={sourcesTest} />
    );
    console.log("CHECK:: ", getAllByTestId("test-picture-source").length);
  });
});
