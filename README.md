# Daily Dose of Science!

## Summary

Welcome to a Daily Dose of Science! A Vue web application utilizing vue-router built as a solo technical challenge to learn a new framework in two days. Daily Dose of Science queries the NASA Photo of the Day api to display the latest photo, alongside allowing a user to see all photos from the current month. Each photo is loaded with the title, date, and description so the user has context for each photo.

## Project setup

To fetch the images from NASA, you will need to go to [The NASA API website]('https://api.nasa.gov/') and apply for a key.

Once you have received a key, clone down the repo and run:

```
npm install
```

From there, create an `.env` file in the root directory of the project, and add `VUE_APP_SECRET_KEY=YourKeyHere`

Now that you have added the app key, you should be all set to get the local server started! Run this command in your terminal:

```
npm run serve
```

## Built By

- [vrandall66](https://github.com/vrandall66)

## Built with

- Vue
- Vue Router
- NASA Photo of the day API

## Screenshots

![localhost_8081_photos-of-the-month (1)](https://user-images.githubusercontent.com/31895658/72461939-41147e80-378d-11ea-818c-ccd4bb9fe22f.png)
![localhost_8081_photos-of-the-month](https://user-images.githubusercontent.com/31895658/72461941-41147e80-378d-11ea-8ad5-27627e789007.png)

## Personal Learning Goals

- Build a static website with a framework I have not worked in before (Vue)
- Implement a stretch goal of incorporating Vue Router
