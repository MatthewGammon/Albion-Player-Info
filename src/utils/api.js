export const baseUrl = process.env.REACT_APP_BASE_URL;

export async function fetchWithTimeout(url, options = {}) {
  const { timeout = 60000 } = options;

  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);

  const response = await fetch(url, {
    ...options,
    signal: abortController.signal,
  });
  clearTimeout(id);
  return response;
}
