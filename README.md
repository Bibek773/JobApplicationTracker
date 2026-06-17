# Job Application Tracker

A full-stack web application for tracking job and internship applications through different hiring stages.

This project is being developed as part of the InternSathi Full Stack Internship assignment.

## Current Status

The project is currently in the initial setup stage.

The folder structure, dependencies, environment examples, and basic configuration files have been initialized. Application features are not implemented yet.

## Tech Stack

* React
* Vite
* Node.js
* Express.js
* MongoDB
* Mongoose
* Axios
* Jest
* Supertest
* Postman

## Planned Features

* View all job applications
* Add a new application
* View application details
* Edit application information
* Delete an application with confirmation
* Filter applications by status
* Search by company name or job title
* Form validation
* Loading and error states

## Planned API Endpoints

```http
GET    /api/applications
GET    /api/applications/:id
POST   /api/applications
PATCH  /api/applications/:id
DELETE /api/applications/:id
```

## Project Structure

```text
job-application-tracker/
├── client/       # React frontend
├── server/       # Express REST API
├── postman/      # Postman collection and environment
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```


## Installation

```bash
git clone https://github.com/Bibek773/JobApplicationTracker
cd JobApplicationTracker
npm run install:all
```

## Run the Project

Run the frontend and backend together:

```bash
npm run dev
```


## Author

**Bibek Ghimire**

* GitHub: [Bibek773](https://github.com/Bibek773)
* Portfolio: [ghimire-bibek.com.np](https://ghimire-bibek.com.np)

## License

This project is licensed under the [MIT License](./LICENSE).
