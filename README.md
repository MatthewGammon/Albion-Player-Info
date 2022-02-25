# Important Info
This is a hobby project being built by an aspiring developer. 
Changes are being pushed to Main to allow for transparency with the progress of this project and to allow for opportunties for feedback. This is not the standard workflow that I would employ.
It is unlikely that this project will ever be used by the public, but instead is being developed for personal and possible internal guild use. 

The initial player search will take some time as Heroku spins up the proxy server. 
The Albion API is also notoriously slow/constantly down and as such I have set a 60 second timeout for player fetch requests. 
You can expect to have to submit your request one to two times before a successful return. 
That player will then be cached for a length of time and subsequent requests will be much faster. 
If you receive continued 503 errors then the AlbionGameInfo API is not responding and you will have to try again at a later time. 

Any feedback and/or contributions are welcomed!

# Project Goals

This project will be a full stack web application that consumes both third party APIs and custom endpoints.
A user will be able to type in their character's name and have information about that character displayed such as:
* Guild and Alliance Name
* Kill and Death Fame
* 10 Most Recent Kills and Deaths

Each Kill and Death will link to a page that displays specific information about that battle such as:
* Total Victim Kill Fame
* Individual Fame Gain by the Killer
* Gear worn by Killer and Victim
* Items in inventory on death

## Demo Application
[Albion Online Player Info](https://albion-player-info.vercel.app/home)

🌊 Ride the wave or drown.


## Tech and Tools

- React.js
- Bootstrap
- CSS
- Node
- Express
- Knex
- PostgreSQL


## Project Backend
[Albion-Regear-Backend Repo](https://github.com/MatthewGammon/albion-regear-backend)
