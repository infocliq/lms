// API SERVER BASE URL
export const baseUrl = "http://localhost:8000"

// CLIENT BASE URL
export const cBseUrl = "http://localhost:3000"

// PROFILE IMAGE URL
export const profileUrl = "http://localhost:8000/profiles/"


// Get Parameters
const queryParams = new URLSearchParams(window.location.search);
export const paramsId = queryParams.get('id');