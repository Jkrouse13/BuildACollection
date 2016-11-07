movies = []
movies.push(
  {title: "Casion Royale",
  director_list: "Martin Campbell",
  genre: "Action-Thriller",
  year: "2006",
  actor_list: ["Daniel Craig", "Judi Dench", "Eva Green", "Mads Mikkelsen"]}
)
movies.push(
  {title: "The Muppet Christmas Carol",
  director_list: "Brian Henson",
  genre: "Holiday",
  year: "1992",
  actor_list: ["Michael Caine", "Frank Oz"]}
)
movies.push(
  {title: "Ocean's Thirteen",
  director_list: "Steven Soderbergh",
  genre: "Heist",
  year: "2007",
  actor_list: ["Brad Pitt", "George Clooney", "Matt Damon"]}
)
movies.push(
  {title: "GoldenEye",
  director_list: "Martin Campbell",
  genre: "Action-Thriller",
  year: "1995",
  actor_list: ["Pierce Brosnan", "Sean Bean", "Izabella Scorupco"]}
)
movies.push(
  {title: "Home Alone",
  director_list: "Chris Columbus",
  genre: "Holiday",
  year: "1990",
  actor_list: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"]}
)

function movie_sort(movie, movie2){
    if(movie.title < movie2.title) return -1;
    if(movie.title > movie2.title) return 1;
    return 0;
}

movies.sort(movie_sort)

console.log(JSON.stringify(movies))
