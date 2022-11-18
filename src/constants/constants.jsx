// Base Url
export const baseUrl = "http://localhost:8000"

// Get Parameters
const queryParams = new URLSearchParams(window.location.search);
export const paramsId = queryParams.get('id');