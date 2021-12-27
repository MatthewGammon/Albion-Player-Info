# Important Info
This is a hobby project being built by an aspiring developer. 
It is unlikely that this project will ever be used by the public, but instead is being developed for personal and possible internal guild use. 

The initial player search will take some time as Heroku spins up the proxy server. 
The Albion API is also notoriously slow and as such I have set a 60 second timeout for player fetch requests. 
You can expect to have to submit your request one to two times before a successful return. 
That player will then be cached for a length of time and subsequent requests will be much faster. 

Any feedback and/or contributions are welcomed!

# Project Goals

This project will be a full stack web application that consumes both third party APIs and custom endpoints.
A user will be able to type in their character's name and have information about that character displayed such as:
* Guild and Alliance Name
* Kill and Death Fame
* 10 Most Recent Kills and Deaths

Each Kill and Death will link to a page that displays specific information about that battle such as:
* Number of participants
* Gear worn by Killer and Victim
* Items in inventory on death

## Demo Application
[Albion Online Player Info](https://albion-player-info.vercel.app/home)


## Tech and Tools

- React.js
- Bootstrap
- CSS
- Node
- Express
- Knex
- PostgreSQL


## Project Backend
[Backend Repo](https://github.com/MatthewGammon/Conflict-Regear-Backend)
