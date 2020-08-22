# movies
Manage movies info from MongoDB - Node.js

1) Download the ZIP.

2) Go to project root and run "npm install"

3) run "npm start"

4) Mongo DB name is "moviesdb" // TO use any other db name, update it in "library\config\connection-manager.js" on Line 2

------------------------------------------------------------------------------------------------------------------------------
5) Endpoints List

a) Save movie information in DB
  
  URL - POST "/save-movie"

  Request (in raw json)
  
  {
	"movie_name": "The Lord of the Rings: The Fellowship of the Ring",
	"movie_img": "https://bit.ly/2tC1Lcg",
	"movie_summary": "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
}


Response -

{
    "_id": "5f40b1f8b9e3d337589f34e0",
    "name": "The Lord of the Rings: The Fellowship of the Ring",
    "img": "https://bit.ly/2tC1Lcg",
    "summary": "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    "__v": 0
}


b) Get Movie Information via Move ID

  URL - GET "/get-movie?movieId=5f40b100a8b1b33d0c67c6b6"  (send movie ID)

  Response - 
  
  [
    {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "img": "https://bit.ly/2tC1Lcg",
        "summary": "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
    }
]

c) Get all movies list

  URL - GET "get-all-movies"

  Response - 
  
   [
    {
        "name": "Harry Potter and the Order of the Phoenix",
        "img": "https://bit.ly/2IcnSwz",
        "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
    },
    {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "img": "https://bit.ly/2tC1Lcg",
        "summary": "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
    }
]

------------------------------------------------------------------------------------------------------------------------------

FOLDER STRUCTURE -

1) Connection File

  path - library\config\connection-manager.js

2) Schema Files

  path - library\schema\movies.js

3) Route + Controller File
  
  path - src\controller\index.js

4) Service Layer 
  
  path - src\business\movie-service.js

5) Model / Dao Layer 

  path - src\infra\movie-dao.js
  
  -------------------------------------------------------------------------------------------------------------------------
