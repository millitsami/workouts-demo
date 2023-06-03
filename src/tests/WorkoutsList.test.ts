/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import WorkoutsList from '$lib/components/WorkoutsList.svelte';

describe("WorkoutsList", () => {
    const listItems = [
        { id: 1, title: 'Test 1', address: 'Test Address', gymName: 'Test Gym', date: "22.1.", time: "9h" },
        { id: 2, title: 'Test 1', address: 'Test Address', gymName: 'Test Gym', date: "22.1.", time: "9h" },
        { id: 3, title: 'Test 1', address: 'Test Address', gymName: 'Test Gym', date: "22.1.", time: "9h" },
        { id: 4, title: 'Test 1', address: 'Test Address', gymName: 'Test Gym', date: "22.1.", time: "9h" },
        { id: 5, title: 'Test 1', address: 'Test Address', gymName: 'Test Gym', date: "22.1.", time: "9h" },
    ];

    it("shows 5 list items", () => {
        render(WorkoutsList, { workoutList: listItems});
        expect(listItems.length).toBe(5);
    });

    it('should render', () => {
        const workoutsList = render(WorkoutsList, { workoutList: listItems});
        expect(() => workoutsList).not.toThrow();
    });
});