[![CircleCI](https://circleci.com/gh/omobosteven/maintenance-tracker-frontend/tree/develop.svg?style=svg)](https://circleci.com/gh/omobosteven/maintenance-tracker-frontend)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8031a6ce850b7cbd615a/test_coverage)](https://codeclimate.com/github/omobosteven/maintenance-tracker-frontend/test_coverage)

Maintenance Tracker - An App that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request.

## Getting Started

### Prerequisites
* Ensure [**Node JS**](https://nodejs.org/en/) is installed.
* Clone the [**repository here**](https://github.com/omobosteven/maintenance-tracker-frontend.git)
* Navigate to the project directory `cd  maintenance-tracker-frontend`
* Run `npm install` on the terminal to install dependecies

### Starting the app
* Run `npm run dev` on the terminal to start the app on development mode

### Testing
* Run `npm run test` on the terminal

MaintenanceTracker consists of the following features:

### Authentication

- It uses JSON Web Token (JWT) for authentication.
- Token is generated on user login
- Token is perpetually verified to check the state of the user if logged in or not.
- Admin User will br pre-seeded into the application with administrative priviledges

### Unauthenticated Users
- Unauthenticated Users can register
- Unuthenticated Users can log in

### Authenticated Users
- Authenticated Users can create a request
- Authenticated Users can modify a request
- Authenticated Users can view all their requests
- Authenticated Users can view the details of a request

### Admin Users
- Admins can view all requests in the system
- Admins can view the details of a request
- Admins can approve a request
- Admins can disapprove a request
- Admins can resolve a request

## API Documentation
You can view the API Documentation [here](https://maintenance-tracker-stv.herokuapp.com/apidocs)


### Questions
For more details contact omobosteven@gmail.com

## Contributing

This project is open for contributions. All contributions must adhere to the Airbnb styleguide.
* [Airbnb Styleguide](http://airbnb.io/javascript/)

### License
* [MIT License](https://github.com/omobosteven/maintenance-tracker/blob/develop/LICENSE)

### Author(s)
* [Omobo Steven](https://github.com/omobosteven)
