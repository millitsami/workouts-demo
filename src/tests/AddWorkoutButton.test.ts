/**
 * @jest-environment jsdom
 */

import AddWorkoutButton from "$lib/components/common/AddWorkoutButton.svelte";
import { render } from "@testing-library/svelte";

describe("AddWorkoutButton", () => {
    it("show text", () => {
        const { getByText } = render(AddWorkoutButton);
        expect(getByText("Book appointment now")).toBeInTheDocument();
    });
})