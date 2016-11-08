movies = []
movies.push(
  {title: "Casion Royale",
  director_list: "Martin Campbell",
  genre: "Action-Thriller",
  year: "2006",
  actor_list: ["Daniel Craig", "Judi Dench", "Eva Green", "Mads Mikkelsen"],
  stars: "8.0",
  metascore: "80"}
)
movies.push(
  {title: "The Muppet Christmas Carol",
  director_list: "Brian Henson",
  genre: "Holiday",
  year: "1992",
  actor_list: ["Michael Caine", "Frank Oz"],
  stars: "7.7",
  metascore: "n/a"}
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
movies.push(
  {title: "Muppet Treasure Island ",
  director_list: "Brian Henson",
  genre: "Comedy",
  year: "1996",
  actor_list: ["Tim Curry", "Billy Connolly", "Frank Oz"],
  stars: "6.9",
  metascore: "n/a"}
)
movies.push(
  {title: "Pirates of the Caribbean: On Stranger Tides",
  director_list: "Rob Marshall",
  genre: "Action-Adventure",
  year: "2011",
  actor_list: ["Johnny Depp", "Penélope Cruz", "Ian McShane"],
  stars: "6.7",
  metascore: "45"}
)
movies.push(
  {title: "Cars 2",
  director_list: "John Lassiter",
  genre: "Animated",
  year: "2011",
  actor_list: ["Owen Wilson", "Larry the Cable Guy", "Michael Caine"],
  stars: "6.3",
  metascore: "57"}
)
movies.push(
  {title: "Indiana Jones and the Kingdom of the Crystal Skull",
  director_list: "Steven Spielberg",
  genre: "Action-Adventure",
  year: "2008",
  actor_list: ["Harrison Ford", "Cate Blanchett", "Shia LaBeouf"],
  stars: "6.2",
  metascore: "65"}
)
movies.push(
  {title: "Dumb and Dumber To",
  director_list: "Bobby Farrelly",
  genre: "Comedy",
  year: "2014",
  actor_list: ["Jim Carrey", "Jeff Daniels", "Rob Riggle"],
  stars: "5.7",
  metascore: "36"}
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
