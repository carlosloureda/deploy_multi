# Example of app running on Vercel & Heroku

This is a simple project with 2 folders: `client` and `server` to deploy from different folders in the same repository.

## Run locally

- Clone repository
- Rename `.env-EXAMPLE` into `.env`. Change server URL or PORT if you need to.
- For running the client:

```
cd client
npm start
```

- For running the server:

```
cd server
npm run dev
```

## How to deploy

WIP

### Heroku

- [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- [How to deploy to eroku](https://devcenter.heroku.com/articles/git)

```ssh
    heroku create $NAME
    heroku git:remote -a $NAME
    # you might need to login
    git subtree push --prefix server/ origin heroku
    # on remote github account you will see the branch  heroku with just the content of server/ folder
    # to deploy from that branch to heroku do this:
    git push heroku heroku:master
    # any time you make a change to your master branch you need to re run the git subtree command
```

- Now on your heroku account you should see a new entry and a building progress, check the build progress.

-
