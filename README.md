# Juggle Games
<img src="https://cdn.dribbble.com/users/980582/screenshots/2497653/octo-uni_800x600.gif" width="100px"><span style="vertical-align:150%; padding-left: 12px">An app to track and share your juggling progression</span>

## [Taskboard](https://github.com/Ecksi/juggle-games/projects/1)

### To Run
- start server (instructions can be found on the server repo readme)
- npm i
- npm run start

### Server Repo
- https://github.com/trual/JuggleGame
### App Structure
> Front-end
- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="25"><span style="vertical-align:15%; padding-left:12px"> React</span>
- <img src="https://cdn.freebiesupply.com/logos/large/2x/react-router-logo-png-transparent.png" width="25"><span style="vertical-align:15%; padding-left:12px"> React Router</span>
- <img src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png" width="25"><span style="vertical-align:15%; padding-left:12px"> Redux</span>
- <img src="https://cdn.freebiesupply.com/logos/large/2x/material-ui-logo-png-transparent.png" width="25"><span style="vertical-align:15%; padding-left:12px"> MaterialUI</span>

> Backend
- <img src="https://cdn.freebiesupply.com/logos/large/2x/java-14-logo-png-transparent.png" width="25"><span style="vertical-align:15%; padding-left:12px">Java</span>
- <img src="https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png" width="25"><span style="vertical-align:15%; padding-left:12px">Spring</span>
- <img src="https://cdn.freebiesupply.com/logos/large/2x/postgresql-logo-png-transparent.png" width="25"><span style="vertical-align:15%; padding-left:12px">Postgres</span>

### Color Palette
- ![#461E52](https://via.placeholder.com/15/461E52/000000?text=+) `#461E52 || rgb(70, 30, 82)`
- ![#DD517E](https://via.placeholder.com/15/DD517E/000000?text=+) `#DD517E || rgb(221, 81, 126)`
- ![#E58E35](https://via.placeholder.com/15/E58E35/000000?text=+) `#E58E35 || rgb(229, 142, 53)`
- ![#556CC9](https://via.placeholder.com/15/556CC9/000000?text=+) `#556CC9 || rgb(85, 108, 201)`
- ![#7A98EE](https://via.placeholder.com/15/7A98EE/000000?text=+) `#7A98EE || rgb(122, 152, 238)`

### Trick Template
```js
trick = {
  id:        Number,
  balls:     Number,
  name:      String,
  animation: String,
  prereq:    Array
}
```
