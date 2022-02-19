export const baseUrl = process.env.REACT_APP_BASE_URL;

const regearBaseUrl =
  process.env.REACT_APP_REGEAR_BASE_URL || 'http://localhost:5000';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export async function fetchWithTimeout(url, options = {}) {
  const { timeout = 30000 } = options;

  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);

  const response = await fetch(url, {
    ...options,
    signal: abortController.signal,
  });
  clearTimeout(id);
  return response;
}

export async function getPlayerId(characterName) {
  try {
    const response = await fetchWithTimeout(
      `${baseUrl}/search?q=${characterName}`
    );
    const playerInfo = await response.json();
    const playerId = playerInfo.players[0].Id;
    return playerId;
  } catch (error) {
    console.error(error);
  }
}

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function createRegearSubmission(submission, signal) {
  const url = `${regearBaseUrl}/regears`;
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({ data: submission }),
    signal,
  };
  return await fetchJson(url, options);
}
