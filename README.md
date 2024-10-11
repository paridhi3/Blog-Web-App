# 🖨️WordSphere - A Simple Blog Web Application

## Overview
**WordSphere** is a blog web application developed using **Node.js**, **Express.js**, and **EJS** templating engine. It allows users to create, view, edit, and delete blog posts. The app is designed with a focus on responsive and clean UI, but does not persist data between sessions as no database is used in this version.

## Features
1. **Post Creation**: Users can create new blog posts.
2. **Post Viewing**: The home page allows users to view all their posts.
3. **Post Editing**: Users can edit any post they have created.
4. **Post Deletion**: Users can delete posts.
5. **Responsive Design**: The UI is designed to work smoothly on both mobile and desktop devices.

## Technologies Used
- **Node.js**: JavaScript runtime used for the backend.
- **Express.js**: Web framework for handling routes and middleware.
- **EJS (Embedded JavaScript)**: Templating engine to dynamically generate HTML content.
- **Bootstrap 5**: For responsive and modern styling.
- **CSS**: Additional custom styling for the layout and design.

## Installation

### 1. Clone the Repository
```
git clone https://github.com/paridhi3/Blog-Web-App.git
cd Blog-Web-App
```

### 2. Install Dependencies
Run the following command to install the necessary dependencies (from the `package.json` file):
```
npm i
```

### 3.  Run the Application
Once the dependencies are installed, you can run the app with:
```
npm start
```
This will start the server on `http://localhost:3000`.

## Usage
1. **Home Page:** Upon visiting the root URL (/), users can see a list of all posts they have created.
2. **New Post:** Clicking the "New Post" button takes users to the post creation page.
3. **View Post:** Each post can be viewed by clicking on the "View" button associated with the post.
4. **Edit Post:** Each post can be edited by clicking on the "Edit" button associated with the post.
5. **Delete Post:** Posts can be deleted by clicking the "Delete" button.

