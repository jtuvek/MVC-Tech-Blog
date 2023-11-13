# MVC Tech Blog

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description

MVC Tech Blog is a web application that allows users to create accounts, publish blog posts, and engage in discussions through comments. It follows the Model-View-Controller (MVC) architectural pattern, providing a structured and organized approach to building a full-fledged tech blog platform.

## Features

- **User Authentication**: Create user accounts and log in securely.
- **Blog Posts**: Create, edit, and delete blog posts.
- **Comments**: Engage in discussions by commenting on blog posts.
- **Dashboard**: Access a personalized dashboard to manage your posts.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **Handlebars.js**: Template engine for rendering views.
- **Sequelize**: SQL ORM for Node.js.
- **MySQL**: Database management system.
- **Express Session**: Middleware for managing user sessions.
- **bcrypt**: Library for hashing passwords securely.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mvc-tech-blog.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd mvc-tech-blog
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Create a MySQL database and update the .env file with your database credentials.**
5. **Run database migrations:**
    ```bash
    npx sequelize-cli db:migrate
    ```

## Usage
1. **Start the application:**
    ```bash
    npm run start
    ```
2. Open your web browser and go to http://localhost:3001.
3. Sign up for an account, create blog posts, and engage with the community!

## Contributing
Contributions are welcome! 