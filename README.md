# Nerdy Movies

:boom: :boom: **If you came here to create a NERD-based web app, please use the [NERD cli](https://github.com/NERDStack/nerd-cli)** :boom: :boom:

## What is this?

This is the sample web app that the NERD cli clones and modifies to get the "wheels turning" after a single command.

## Contribute

In order to run this locally, you need to do the following...

 1. Clone the repo `$ git clone https://github.com/nerdstack/nerdymovies.git`
 2. Copy `scripts/start-local.sample.sh` to `scripts/start-local.sh`
 3. Modify `scripts/start-local.sh` to include your documentdb URI and key (you need an existing Azure DocumentDB account)
 4. Create a DocumentDB collection named `movies` in a database named `nerdymovies`
 5. To run this locally execute `npm run build && npm run start-local`
 6. Navigate your browser to `http://localhost:3000` to view the web app

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

