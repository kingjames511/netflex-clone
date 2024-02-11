const key = "bf70f02ed59878d1c8f1144d9cfb5669";

const requests = {
  requestNowplaying: `https://api.themoviedb.org/3/discover/movie?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1 `,
};
export default requests;
