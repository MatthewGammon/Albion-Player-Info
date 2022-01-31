export const baseUrl = process.env.REACT_APP_BASE_URL;

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
