movies = []
movies.push(
  {title: "Casion Royale",
  director_list: "Martin Campbell",
  genre: "Action-Thriller",
  year: "2006",
  actor_list: ["Daniel Craig", "Judi Dench", "Eva Green", "Mads Mikkelsen"],
  stars: "8.0"}
)
movies.push(
  {title: "The Muppet Christmas Carol",
  director_list: "Brian Henson",
  genre: "Holiday",
  year: "1992",
  actor_list: ["Michael Caine", "Frank Oz"],
  stars: "7.7",
  metascore: "80"}
)
movies.push(
  {title: "Ocean's Thirteen",
  director_list: "Steven Soderbergh",
  genre: "Heist",
  year: "2007",
  actor_list: ["Brad Pitt", "George Clooney", "Matt Damon"],
  stars: "6.9",
  metascore: "62"}
)
movies.push(
  {title: "GoldenEye",
  director_list: "Martin Campbell",
  genre: "Action-Thriller",
  year: "1995",
  actor_list: ["Pierce Brosnan", "Sean Bean", "Izabella Scorupco"],
  stars: "7.2",
  metascore: "65"}
)
movies.push(
  {title: "Home Alone",
  director_list: "Chris Columbus",
  genre: "Holiday",
  year: "1990",
  actor_list: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"],
  stars: "7.5",
  metascore: "63"}
)

function movie_sort(movie, movie2){
    if(movie.title < movie2.title) return -1
    if(movie.title > movie2.title) return 1
    return 0
}

function star_sort(movie, movie2){
    if(movie.stars > movie2.stars) return -1
    if(movie.stars < movie2.stars) return 1
    return 0
}

movies.sort(star_sort)

console.log(JSON.stringify(movies))

movies.forEach(function(movies){
  document.getElementById('movies').innerHTML = document.getElementById('movies').innerHTML + "<tr>" + "<td>" + movies.title + "</td>"  + "<td>" + movies.director_list + "</td>"  + "<td>" + movies.year + "</td>"  + "<td>" + movies.actor_list.join(", ") + "</td>" + "<td>" + movies.genre + "</td>" + "<td>"+ movies.stars + "</td>" + "<td>" + movies.metascore + "</td>" + "</tr>"
})
