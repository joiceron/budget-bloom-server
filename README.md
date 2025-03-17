# How to run the project

Follow these steps to set up and run the project locally:

## 1️⃣ Clone the Repository
Clone or download the repository using the following command:

```sh
git clone (https://github.com/joiceron/budget-bloom-server.git)
```


## 2️⃣ Configure Environment Variables 

+ Rename the .env.sample file to .env
+ Update the following environment variables as needed:
  + DB_LOCAL_DBNAME
  + DB_LOCAL_USER
  + DB_LOCAL_PASSWORD

## 3️⃣ Install Dependencies
 In the terminal run to install required dependencies an run the server as a development: 

    npm install
    npm run dev

## 5️⃣ Set Up the Database
+ Create budgetbloom database, and then the database migration and the seed by running:

      npx knex migrate:latest
      npx knex seed:run

And that is it! 🎉

If you encounter any issues, feel free to contact me via LinkeIn: www.linkedin.com/in/joiceron
