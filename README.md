Workflow Tool
This project was developed for a Full Stack Engineer interview. I completed it within a day, and it was an enjoyable experience working with Django and React!

Project Overview
The Workflow Tool is a drag-and-drop flowchart application that allows users to create and manage workflows. The application consists of a React frontend and a Django backend, connected to a MongoDB database. The frontend uses React Flow to manage and render flowchart elements, while the backend handles API requests and authentication.

Features
Drag-and-Drop Flowchart Creation: Users can easily create and connect flowchart elements using a drag-and-drop interface.
Backend Integration: The backend is built with Django and handles API requests, saving workflows, and user authentication.
Session-Based Authentication: Secure user authentication is managed through session-based methods.
Database Integration: MongoDB is used to store and manage workflow data.
Technologies Used
Frontend: React.js, React Flow
Backend: Django (Python)
Database: MongoDB
Authentication: Session-based authentication
Setup Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/rezasrk1/workflow-tool.git
Navigate to the Frontend Directory:

bash
Copy code
cd workflow-tool/frontend
Install Frontend Dependencies:

bash
Copy code
npm install
Navigate to the Backend Directory:

bash
Copy code
cd ../backend
Install Backend Dependencies:

bash
Copy code
pip install -r requirements.txt
Run Migrations:

bash
Copy code
python manage.py migrate
Start the Backend Server:

bash
Copy code
python manage.py runserver
Start the Frontend Server:

bash
Copy code
cd ../frontend
npm start
Acknowledgements
This project was a great exercise in full stack development, and it was particularly fun to work with Django for the backend. The challenge of creating a functional and interactive tool in such a short timeframe was both rewarding and enjoyable.

License
This project is licensed under the MIT License - see the LICENSE file for details.
