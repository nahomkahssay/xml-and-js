const clientId = `a5f261df31334b54bbdaf6a8cf18327d`;
const clientSecret = `72dce1229f33421988f780a020f146cb`;

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=en_US&limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
  const limit = 10;

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.playlists.items;
};


const getTracksArtists = async (token, playlistUrl) => {
  const limit = 4;
  const result = await fetch(
    `${playlistUrl}?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items;
};


const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    const playlistsList = playlists.map(
      async ({ name, external_urls: { spotify }, images: [image], tracks: { href } }) => {
        const tracks = await getTracksArtists(token, href);
        const tracksList = tracks.map(({ track: { name, artists: [artist] } }) => {
          return `<p>Track Name: ${name}, Artist: ${artist.name}</p>`
        }).join(``);
        return `
        <li>
          <a href="${spotify}" alt="${name}" target="_blank">
            <img src="${image.url}" width="180" height="180"/>
          </a>
           <div> 
            ${tracksList}
          </div>
        </li>`
      });

    resolvedplaylistsList = await Promise.all(playlistsList);
    resolvedplaylistsList = resolvedplaylistsList.join(``);

    if (playlists) {
      const html = `
      <article class="genre-card">
      <div>
        <h2>${name}</h2>
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
      </div>
      <div>        
        <ol>
          ${resolvedplaylistsList}
        </ol>
      </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
    }
  }
  );
};

loadGenres(); 