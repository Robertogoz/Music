# Project - Music

## Project Stack

- Lang → TypeScript in Mobile and API
- Docker → 3 containers(API, Mobile, DB) → use docker-compose(not implemented yet)
- Expo Bare workflow
- Tests - Jest/Testing Library(not implemented yet)

- Following a Conventional Commit Pattern - [https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)
- Create a good documentation(English and Portuguese), maybe using Swagger ui to backend(not necessary because its a simple API)

Techs:

- APP - React Native
  - React Navigation
  - Styled Components
  - React Hook Form - Validations by Yup
  - Context API
  - Natives React Hooks
  - Spotify oAuth2
- API - Nodejs
  - Express
  - JWT
  - MongoDB - Mongoose
  - REST

## To Do

- [x] App with Authentication using context API- oAuth2
- [x] Stack and Main navigation
- [x] Optimized to Android and IOS
- [x] Clean Code
- [x] Search Screen
- [x] Implements React Query to cache data
- [x] Responsive app
- [ ] Users Interaction
- [ ] Create a playlist on Spotify with your and another user favorite music’s
- [ ] Tests (Test Library and/or Jest)

### Maybe?

- [ ] Add animations to app
- [ ] WebSocket chat
- [ ] Spotify player in navigation bar
- [ ] Dark theme
- [ ] Follow system, to follow another user and your Spotify account
- [ ] Avatar management system

## About app

Music - A social media that you creates your profile and show your favorite music’s(receiving by Spotify API) - find another users with the same music style as you

## How to use - oAuth2 will not work

Without Docker

- You need to have:
  - Expo CLI
  - Node.js v16.15
  - MongoDB - community server
- Clone this repository

- Add a .env file with `API_IP=http:/yourIp:3030` or change on `./food-app/src/services/api.ts`

- Go to ./food-app/src/screens/AuthScreens/SignInScreen/components/SpotifyButton and change RedirectURI to 'exp://localhost:19000'

- Open 2 terminals:
  - One in ./food-app and run `expo start —tunnel`
  - Two in ./food-api and run `yarn dev`
