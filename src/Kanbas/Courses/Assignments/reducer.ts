import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, {payload: newAssignment}) => {
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments =
                state.assignments.filter((a : any) => a._id !== assignmentId) as any;
        },
        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a : any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignments} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;