# Job Application Tracker

A full-stack web application for tracking job and internship applications through different hiring stages.

This project was developed as part of the InternSathi Full Stack Internship assignment.

## Current Status

The core backend API and frontend functionality are implemented.

Users can currently:

* Create a job application
* View all saved applications
* View full application details
* Edit an existing application
* Delete an application with confirmation
* Filter applications by status
* Search by company name or job title

The UI is currently functional but still requires final styling and responsiveness improvements.

## Tech Stack

* React
* Vite
* Node.js
* Express.js
* MongoDB
* Mongoose
* Axios
* Postman

## Completed Features

* Mongoose application schema
* MongoDB database connection
* Create application API
* Get all applications API
* Get application by ID API
* Update application API
* Delete application API
* Filter applications by status
* Search by company name or job title
* API testing using Postman
* React application form
* Frontend and backend integration using Axios
* Display applications in the frontend
* View application details
* Edit applications from the frontend
* Delete applications with confirmation
* Clear form after successful submission

## Remaining Work

* Improve responsive UI styling
* Add frontend validation messages
* Add loading states
* Add user-friendly API error messages
* Add automated API tests
* Add final frontend screenshots
* Deploy the application

## Application Fields

Each application contains:

* Company name
* Job title
* Job type
* Application status
* Applied date
* Notes
* Created timestamp
* Updated timestamp

## API Endpoints

```http
GET    /api/applications
GET    /api/applications/:id
POST   /api/applications
PATCH  /api/applications/:id
DELETE /api/applications/:id
```

### Filter by status

```http
GET /api/applications?status=Applied
```

### Search by company name or job title

```http
GET /api/applications?search=intern
```

### Combine search and status filter

```http
GET /api/applications?status=Applied&search=intern
```

## Project Structure

```text
JobApplicationTracker/
├── client/         # React + Vite frontend
├── server/         # Node.js + Express backend
├── screenshots/    # API, database and UI screenshots
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

```bash
git clone https://github.com/Bibek773/JobApplicationTracker.git
cd JobApplicationTracker
npm run install:all
```

## Run the Project

Run frontend and backend together:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000/api/applications
```

## Screenshots

### Create Application API

![Create Application API](screenshots/job_post.png)

### Get All Applications API

![Get All Applications API](screenshots/job_get.png)

### Get Application by ID API

![Get Application by ID API](screenshots/job_getById.png)

### Update Application API

![Update Application API](screenshots/job_Patch.png)

### Delete Application API

![Delete Application API](screenshots/job_delete.png)

### MongoDB Record

![MongoDB Record](screenshots/mongodb_record.png)

### Initial Frontend UI

![Initial Frontend UI](<screenshots/skeleton_UI_application fetch.png>)

### Application Search

![Application Search](screenshots/applicationsearch.png)

## Author

**Bibek Ghimire**

* GitHub: [Bibek773](https://github.com/Bibek773)
* Portfolio: [ghimire-bibek.com.np](https://ghimire-bibek.com.np)

## License

This project is licensed under the [MIT License](./LICENSE).