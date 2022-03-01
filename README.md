# Important Info
This is a hobby project being built by an aspiring developer. 

The Albion API is also notoriously slow/constantly down and as such I have set a 60 second timeout for player fetch requests. 
You can expect to have to submit your request one to two times before a successful return. 
(The API has been much more responsive over the past month)
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

Players belonging to particular guilds will have a button that appears under each of their deaths that allows them to submit a regear request.
The request will be sent to a custom API where it will go through several stages of validation to ensure it meets all player and guild regear criteria.

## Demo Application
🌊 Ride the wave or drown.
[Albion Online Player Info](https://albion-player-info.vercel.app/home)

## Example Data Visualisation
[Pending Requests](https://datastudio.google.com/s/qFWvzEYMNTw)

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
