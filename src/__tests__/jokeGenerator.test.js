import { render } from "react-testing-library"
import "dom-testing-library/extend-expect";
//import { getByTestId } from "@testing-library/react";

test("Joke component recieves props and then renders text", () => {
    const { getByTestId } = render(
        <Joke text="The funniest joke this year." />
    );

    expect(getByTestId("joke-text")).toHaveTextContent(
        "The funniest joke this year."
    );
}
