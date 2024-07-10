# Swigato Food Delivery Platform

![Main Page](images/mainpage.png)

## Project Description

Swigato is a fully functional food delivery platform that enables users to browse, order, and rate food from various restaurants. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

Swigato aims to provide:
- A seamless and efficient food ordering experience for users.
- A platform for restaurants to showcase their menus and reach a wider audience.

In the following sections, we will cover the technical details of the platform, including:
1. System Architecture
2. Front-end
3. Back-end
4. API Design
5. Deployment
6. Testing
7. Future Enhancements

In summary, Swigato is designed to offer an intuitive and user-friendly experience for both customers and restaurant owners. The following sections provide a comprehensive overview of the platform's features and functionalities.

## System Architecture

Swigato consists of three main components: the front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

### Front-end

The front end of the platform is built using ReactJS, which allows for the creation of dynamic and responsive user interfaces. The front end communicates with the back end using RESTful API calls.

### Back-end

The back end of the platform is built using NodeJS and ExpressJS. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, order processing, and restaurant management. The back end also handles the logic for processing and storing user data and orders.

### Database

The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB stores the menu items, user data, orders, and other relevant information.

### Architecture Diagram

Here is a high-level diagram that illustrates the architecture of the Swigato platform:

![Architecture](images/architecture.png)

## Front End

The front end of Swigato includes all the necessary pages that a food delivery platform should have. Some of these pages are:

### For Users:
- **Homepage**: This page provides an overview of the platform and links to various restaurants.
- **Restaurant List**: This page lists all the available restaurants along with their menus.
- **Menu**: This page displays the menu items of a selected restaurant.
- **Cart**: This page allows users to review their selected items before placing an order.
- **Order History**: This page shows the user's past orders.
- **Profile**: This page allows users to view and edit their profile details.

### For Restaurants:
- **Dashboard**: This page provides an overview of the restaurant's orders and statistics.
- **Menu Management**: These pages allow the restaurant to add, update, and delete menu items.
- **Order Management**: This page allows the restaurant to view and manage current orders.
- **Profile**: This page allows the restaurant to view and edit their profile details.

To build the front end, we use frameworks and libraries such as ReactJS, CSS, and Tailwind CSS for styling. To manage the state of the application, we use Redux.

## Back End

### Description of the Back-end Architecture

Swigato uses a monolithic architecture with the backend built using Node.js and Express.js, and MongoDB as the primary database.

### Features and Functionalities of the Back-end

The back end of Swigato provides a range of features and functionalities, including:
1. **User authentication and authorization**: Users and restaurants can sign up and log in to the platform using their email addresses and passwords. The platform supports JWT for secure authentication.
2. **Order management**: Users can create, read, update, and delete orders, as well as manage order statuses.
3. **Menu management**: Restaurants can create, read, update, and delete menu items.
4. **Payment integration**: The platform integrates with payment gateways for handling transactions.
5. **Cloud-based media management**: Swigato uses a cloud-based service for storing and managing media content such as images.

### Frameworks, Libraries, and Tools used

The back end of Swigato uses a range of frameworks, libraries, and tools to ensure its functionality and performance, including:
- **Node.js**: Used as the primary framework for the back end.
- **MongoDB**: Used as the primary database.
- **Express.js**: Used as a web application framework.
- **JWT**: Used for authentication and authorization.
- **Bcrypt**: Used for password hashing.
- **Mongoose**: Used as an ODM library for MongoDB.

### Data Models and Database Schema

The back end of Swigato uses a range of data models and database schemas to manage data, including:
- **User schema**: Includes fields such as name, email, password, and order details.
- **Restaurant schema**: Includes fields such as name, email, password, and menu details.
- **Order schema**: Includes fields such as user details, restaurant details, items ordered, and order status.
- **Menu schema**: Includes fields such as item name, description, price, and restaurant details.

![Database Schema](images/schema.png)

## API Design

The Swigato platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

### Sample list of API endpoints and their functionalities:
1. **`/api/auth/signup` (POST)** - Create a new user (customer or restaurant) account.
2. **`/api/auth/login` (POST)** – Log in using existing credentials and generate a JWT token.
3. **`/api/auth/forgot-password` (POST)** - Send an email with a password reset link.
4. **`/api/restaurants` (GET)** - Get a list of all available restaurants.
5. **`/api/restaurants/:id` (GET)** - Get details of a specific restaurant by ID.
6. **`/api/restaurants` (POST)** - Create a new restaurant.
7. **`/api/restaurants/:id` (PUT)** - Update an existing restaurant by ID.
8. **`/api/restaurants/:id` (DELETE)** - Delete a restaurant by ID.
9. **`/api/orders` (GET)** - Get a list of all orders for a user or restaurant.
10. **`/api/orders/:id` (GET)** - Get details of a specific order by ID.
11. **`/api/orders` (POST)** - Create a new order.
12. **`/api/orders/:id` (PUT)** - Update an existing order by ID.
13. **`/api/orders/:id` (DELETE)** - Delete an order by ID.

### Sample API requests and responses:

1. **GET `/api/restaurants`**: Get all restaurants
   * Response: A list of all restaurants in the database
2. **GET `/api/restaurants/:id`**: Get a single restaurant by ID
   * Response: The restaurant with the specified ID
3. **POST `/api/restaurants`**: Create a new restaurant
   * Request: The restaurant details in the request body
   * Response: The newly created restaurant
4. **PUT `/api/restaurants/:id`**: Update an existing restaurant by ID
   * Request: The updated restaurant details in the request body
   * Response: The updated restaurant
5. **DELETE `/api/restaurants/:id`**: Delete a restaurant by ID
   * Response: A success message indicating that the restaurant has been deleted.

In conclusion, the REST API design for the Swigato platform is a crucial part of the project. The API endpoints and their functionalities are designed to ensure seamless communication between the front-end and back-end of the application. By following RESTful principles, the API will be scalable, maintainable, and reliable. The sample API requests and responses provided above illustrate how each endpoint will function and what kind of data it will accept or return. With this API design, Swigato will be able to provide a smooth user experience while ensuring security and stability.

## Deployment

The deployment process, hosting environment, and infrastructure details will be outlined here. Typically, this might include information about using platforms like Heroku, AWS, or Netlify for deploying the front-end and back-end components, as well as any deployment scripts and configuration files.

## Testing

This section will describe the testing process, types of testing performed (unit tests, integration tests, end-to-end tests), and the test frameworks and tools used (like Jest, Mocha, Chai, etc.).

## Future Enhancements

Potential future enhancements to the platform could include:
1. **Mobile App**: Develop a mobile app for Android and iOS platforms.
2. **Advanced Analytics**: Provide advanced analytics and reporting for restaurants.
3. **AI-based Recommendations**: Implement AI-based recommendation systems for personalized user experiences.
4. **Multi-language Support**: Add support for multiple languages to cater to a wider audience.
5. **Subscription Plans**: Introduce subscription plans for premium features.

These enhancements would improve the platform by providing additional functionalities, enhancing user experience, and expanding the platform's reach. Estimated timelines and priorities for implementing these enhancements will be provided based on project planning.
