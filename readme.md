This is INCIT Backend test by Mada Nugraha

The technology i am using in this application as follows : 
- Express.js
- Sequelize
- PostgreSQL
- ES6
- Nodemailer for the Email Transporter


Required : 
- PostgreSQL installed on your machine
- Node.js Environment
- NPM CLI


Initial Setup : 
- Run NPM Install
- Go to Folder src/core then run command "npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate"
- Go to Main directory of the application, then run "npm run dev:start"
- Open up browser to test if the application works perfectly at http://localhost:8000

How to use : 
- Open up http://localhost:8000/api/v1/auth/sign-up at your REST Client or something like Postman with these body parameters {
    "firstName" : string,
    "lastName" : string,
    "email" : string,
    "password" : string,
    "retypePassword" : string
}
- The response would be the user data u just created alongside with the "email" link (we're using Ethereal Email)