# Workflow Tool

This project was developed for a Full Stack Engineer interview. I completed it within a day, and it was an enjoyable experience working with Django and React!

## Project Overview

The Workflow Tool is a drag-and-drop flowchart application that allows users to create and manage workflows. The application consists of a React frontend and a Django backend, connected to a MongoDB database. The frontend uses React Flow to manage and render flowchart elements, while the backend handles API requests and authentication.

## Features

- **Drag-and-Drop Flowchart Creation**: Users can easily create and connect flowchart elements using a drag-and-drop interface.
- **Backend Integration**: The backend is built with Django and handles API requests, saving workflows, and user authentication.
- **Session-Based Authentication**: Secure user authentication is managed through session-based methods.
- **Database Integration**: MongoDB is used to store and manage workflow data.

## Technologies Used

- **Frontend**: React.js, React Flow
- **Backend**: Django (Python)
- **Database**: MongoDB
- **Authentication**: Session-based authentication

## Setup Instructions

Follow these steps to set up the project:

| Step | Command/Action |
|------|----------------|
| 1. **Clone the Repository** | `git clone https://github.com/rezasrk1/workflow-tool.git` |
| 2. **Navigate to the Frontend Directory** | `cd workflow-tool/frontend` |
| 3. **Install Frontend Dependencies** | `npm install` |
| 4. **Navigate to the Backend Directory** | `cd ../backend` |
| 5. **Install Backend Dependencies** | `pip install -r requirements.txt` |
| 6. **Run Migrations** | `python manage.py migrate` |
| 7. **Start the Backend Server** | `python manage.py runserver` |
| 8. **Start the Frontend Server** | `cd ../frontend`<br>`npm start` |
