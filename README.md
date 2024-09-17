##U-blog Project

#Overview
U-blog is a blog platform built with the MERN stack (MongoDB, Express.js, React.js, and Node.js).
It allows users to create, read, comment on blog posts, and interact with content in real time.
It also supports user authentication for secure access.

#Features
User Authentication: Login and registration via JWT.
Blog Management: Users can create, update, and delete blog posts.
Comment System: Users can leave and view comments on blog posts.
Dynamic Data: Real-time updates using Axios for API communication.

#Technology Stack
Frontend: React.js, CSS, SASS
Backend: Node.js, Express.js, MongoDB, Mongoose
Authentication: JWT (JSON Web Token)
API Communication: Axios
Icons: Material-UI

##Installation & Setup
#Clone the repository:
git clone https://github.com/yourusername/U-blog.git
cd U-blog

##Install dependencies for both the client and server:
#Server Setup:
cd backend
npm install

#Client Setup:
cd frontend
npm install

#Create a .env file in the backend directory:
PORT=4000
MONGO_URI=mongodb://localhost:27017/blogs
JWT_SECRET=your_jwt_secret_key

#Run the backend server:
cd backend
npm start

#Run the frontend:
cd frontend
npm start

#Access the Application:
Frontend: http://localhost:3000
Backend: http://localhost:4000

##API Endpoints
#Blog Routes:
GET /api/blogs - Fetch all blogs
GET /api/blogs/:id - Fetch a specific blog by ID
POST /api/blogs - Create a new blog
PUT /api/blogs/:id - Update a blog
DELETE /api/blogs/:id - Delete a blog

#Comment Routes:
GET /api/blogs/:id/comments - Fetch all comments for a specific blog
POST /api/blogs/:id/comments - Add a comment to a specific blog
#Authentication Routes:
POST /api/auth/register - Register a new user
POST /api/auth/login - Login an existing user

#File Structure:
U-blog/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── styles/
│
├── .env
└── README.md

##Contributing
#Fork this repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add a new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

##License
This project is licensed under the MIT License. See the LICENSE file for more details.

##Contact
Feel free to reach out to me at gathuitapius097@gmail.com for any questions or feedback.
