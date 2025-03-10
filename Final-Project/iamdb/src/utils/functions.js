// import genres from "@/utils/genres.js";
// const filterByGenre = (movies, genre) => {
//   return movies.filter((movie) => movie.genre_ids.includes(genre.id));
// };
// const getGenre = (id) => {
//   return genres.find((genre) => genre.id === id);
// };
// export { filterByGenre, getGenre };

// //1. Filter movies by genre
// //2. Togglling genres and show more button
// //3. Group geners if u want
// //4. hadle selected genre state
// const isExpanded = ref(false);

// const displayGenres = computed(() => {
//   return isExpanded.value ? genres : genres.slice(0, 4);
// });
// const showMore = () => {
//   isExpanded.value = !isExpanded.value;
//   console.log("Show More", isExpanded.value);
// };

// export default functions;
