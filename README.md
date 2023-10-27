# E-commerce Back End

## Description

This is the back-end application for an e-commerce website. It provides the necessary API routes and database functionality to support the e-commerce platform. The application is built using Node.js, Express.js, and Sequelize ORM, and it interacts with a MySQL database.

## Table of Contents

- Installation
- Usage
- API Routes
- Database Schema
- Walkthrough Video
- License
- Contributing
- Questions

## Installation

To install the necessary dependencies, run the following command:

npm install



## Usage

1. Set up your MySQL database and update the database connection configuration in the `.env` file.

2. Run mysql shell using the following command:

npm -u root -p   
 then
   quit



3. Seed the database with sample data by running the following command:

npm run seed



4. Start the application using the following command:

npm run start



## API Routes

The application provides the following API routes:

- `/api/categories`: GET all categories
- `/api/categories/:id`: GET a single category by ID
- `/api/products`: GET all products
- `/api/products/:id`: GET a single product by ID
- `/api/tags`: GET all tags
- `/api/tags/:id`: GET a single tag by ID

Refer to the source code for more details on the API routes and their functionality.

## Database Schema

The application uses the following database schema:

- `Category` table with columns: `id`, `category_name`
- `Product` table with columns: `id`, `product_name`, `price`, `stock`, `category_id`
- `Tag` table with columns: `id`, `tag_name`
- `ProductTag` table (join table) with columns: `id`, `product_id`, `tag_id`

Refer to the source code for more details on the database schema.

## Walkthrough Video

A walkthrough video demonstrating the functionality of the application can be found [here](<https://drive.google.com/file/d/1KKY1BDmBlONfha6E6U27vgE1e8lxvmpf/view>).

## License

This project is licensed under the MIT license.

## Contributing

Contributions are welcome! Please refer to the Contributing Guidelines for more information.

## Questions
 
If you have any questions, please feel free to reach out:

- GitHub: [username] https://github.com/jorjik81
- Email: [email] jorjik81@gmail.com

This is just an example README file. Make sure to update the sections with the appropriate information and provide a link to the walkthrough video demonstrating the functionality of your specific implementation.


Remember to include any additional sections or information required by the project requirements or guidelines provided by your instructor.


Good luck with your project!

