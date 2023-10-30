# Restaurant Foodie Website

![](./screenshots/main_page.png)

This restaurant website, dubbed "Restaurant Foodie," is a comprehensive platform built using Node.js, Express, and MySQL. This platform provides a comprehensive review system for restaurants. Users can register, login, browse, comment on, and favorite various eateries. Additionally, they have the ability to follow other users and view their activity. On the other hand, administrators have the capability to manage restaurant data and categories from the backend.

## Features
- User Features
  - Authentication
    - Register an account
    - Login to the platform
    - Logout
  - Restaurant Browsing
    - View a list of all restaurants
    - Access detailed information about each restaurant
  - Filtering
    - Filter restaurants by categories
  - User Interaction
    - Leave comments on restaurant pages
    - Favorite restaurants for easy access later
    - View the latest 10 restaurants added to the platform
    - View the latest 10 comments made across the platform
  - Profile Management
    - Edit personal profile information
    - View restaurants they've commented on or favorited
    - Follow other users
    - View list of users they're following and users who are following them
- Admin Features
  - Exclusive admin login
- Restaurant Management
  - Manage basic details of restaurants
  - Manage restaurant categories

## Environment Setup

To run the project, make sure you have Node.js installed on your system. Then, follow these steps:

1. Make sure you have Node.js and npm installed on your system.
2. Clone the repository:
```
git clone https://github.com/scheng0718/restaurant-foodie.git
```
3. Navigate to the project directory: 
```
cd restaurant-foodie
```
4. Install the necessary packages: 
```
npm install
```  

5. Import the default user, restaurant, categories, and comments seed data into your MySQL database.
```
npm run seed
```
6. The email and password for testing purpose.
    ||Name|Email|Password|
    |:--|:--|:--|:--|
    |1|root|root@example.com|12345678|
    |2|user1|user1@example.com|12345678|
    |3|user2|user2@example.com|12345678|
7. Start the server: 
```
npm run start
```
8. Open your web browser and visit: 
```
http://localhost:3000
```
9. To exit the application and stop the server: 
```
ctrl + c
```

## Package Versions

- bcryptjs: 2.4.3
- connect-flash: 0.1.1
- dayjs: 1.10.6
- dotenv: 16.1.3
- express: 4.17.1
- express-handlebars: 5.3.3
- express-session: 1.17.2
- faker: 5.5.3
- imgur: 1.0.2
- jsonwebtoken: 8.5.1
- method-override: 3.0.0
- multer: 1.4.3
- mysql2: 2.3.0
- passport: 0.4.1
- passport-jwt: 4.0.0
- passport-local: 1.0.0
- sequelize: 6.6.5
- sequelize-cli: 6.2.0
- chai: 4.3.4
- mocha: 9.1.1
- sinon: 11.1.2
- supertest: 6.1.6

## Developer

This project was developed by Evan Cheng.