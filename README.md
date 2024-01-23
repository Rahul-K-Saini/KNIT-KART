# KNIT KART
## Description
Welcome to ***KNIT KART : KNIT's Arcade for Recycled Treasures***, the innovative solution designed to enhance the living experience of hostlers by facilitating the seamless exchange of various items. Our major project addresses the common challenges faced by individuals residing in hostels who often find themselves with surplus belongings they no longer need, while simultaneously seeking items they do require. KNIT-KART serves as a platform to connect users with similar needs, fostering a sustainable and collaborative environment within hostel communities.

## Key Features

**Comprehensive Item Categories**

KNIT-KART covers a wide array of categories, including books, notes, electronics, household items, sports equipment, wearables, kitchenware, study equipment, furniture, and more. This ensures that users can exchange a diverse range of items, making the platform versatile and accommodating for various needs.

**User-Friendly Ad Posting**

Our platform offers a simple and user-friendly interface for posting advertisements. Users can easily create ads specifying the items they want to exchange and mention the items they are looking for in return. This feature ensures clarity and transparency in every exchange.

**Secure Communication**

Privacy and security are paramount on KNIT-KART. The platform facilitates secure communication between users, allowing them to discuss the details of the exchange without compromising their personal information.

## Purpose:

The primary goal of KNIT-KART is to create a sustainable and collaborative environment within hostel communities by addressing the common problem of surplus belongings. By providing a platform for the exchange of items ranging from course materials to everyday essentials, KNIT-KART aims to reduce waste, promote resourcefulness, and foster a sense of community among hostlers.

Join KNIT-KART today and embark on a journey of collaborative living, where your surplus becomes someone else's treasure!

## Frontend Requirements
List the technologies and tools required for the frontend development.

1. **React.js**
- Description: A JavaScript library for building user interfaces.
Link: [React.js](https://reactjs.org/)

2. **Tailwind CSS**
- Description: A utility-first CSS framework for rapidly building custom user interfaces.
Link: [Tailwind CSS](https://tailwindcss.com/)

3. **React Router**
- Description: Declarative routing for React.js applications.
Link: [React Router](https://reactrouter.com/)

4. **Context API**
- Description: A way to share global state in a React application.
Link: [React Context](https://reactjs.org/docs/context.html)

5. **FIGMA**
- Description: Collaborative interface design tool used for creating UI/UX designs.
Link: [FIGMA](https://www.figma.com/)

## Backend Requirements
List the technologies and tools required for the backend development.

1. **Express.js**
- Description: A web application framework for Node.js, designed for building web applications and APIs.
Link: [Express.js](https://expressjs.com/)

2. **Firebase (BaaS)**
- Description: A backend-as-a-service (BaaS) platform that provides various services for mobile and web application development.
Link: [Firebase](https://firebase.google.com/)

3. **MongoDB**
- Description: A NoSQL database for storing and retrieving data.
Link: [MongoDB](https://www.mongodb.com/)

4. **Mongoose**
- Description: An ODM (Object Data Modeling) library for MongoDB and Node.js.
Link: [Mongoose](https://mongoosejs.com/)

5. **MongoDB Atlas/Compass**
- Description: MongoDB Atlas for cloud-based MongoDB deployments, and MongoDB Compass for a graphical user interface for MongoDB.
Link: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) / [MongoDB Compass](https://www.mongodb.com/products/compass)

6. **Postman**
- Description: A collaboration platform for API development, including API testing.
Link: [Postman](https://www.postman.com/)

7. **Render / Cyclic**
- Description: Platforms for deploying and hosting backend applications.
Link: [Render](https://render.com/) / [Cyclic](https://cyclic.sh/)

## Getting Started

Follow these steps to set up and run KNIT-KART locally on your development environment.

### Frontend Requirements

1. **Install Node.js and npm:**
   If you haven't already, [download and install Node.js](https://nodejs.org/), which includes npm (Node Package Manager).

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/Rahul-K-Saini/knit-kart.git

3. **Navigate to Frontend Directory:**
   ```bash
   cd knit-kart/frontend

4. **Install Frontend Dependencies:**
   ```bash
   npm install

5. **Run the Frontend:**
   ```bash
   npm start
This command will start the development server and open KNIT-KART in your default web browser.

### Backend Requirements

1. **Install Node.js and npm:**
Ensure Node.js and npm are installed as mentioned above.

2. **Navigate to the Backend Directory:**
   ```bash
   cd ../backend

3. **Install Backend Dependencies:**
   ```bash
   npm install

4. **Configure Firebase:**
#### Create a Firebase Project:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project for your application.

#### Obtain Configuration Details:
   - In the Firebase project settings, navigate to "Project settings."
   - Copy the Firebase configuration details provided for your web app.

#### Set up Firebase Authentication and Firestore:
   - In the Firebase Console, navigate to the "Authentication" section to set up authentication methods.
   - In the Firebase Console, navigate to the "Firestore Database" section to set up Firestore for your project.

5. **Configure MongoDB:**

#### Install MongoDB:
   - Install MongoDB on your local machine by following the instructions on the [official MongoDB installation guide](https://docs.mongodb.com/manual/installation/).
   - Alternatively, use MongoDB Atlas for cloud-based hosting. Follow the [MongoDB Atlas setup guide](https://docs.atlas.mongodb.com/getting-started/) to create a cluster.

#### Obtain MongoDB Connection Details:
   - If using a local installation, no additional steps are required. If using MongoDB Atlas, obtain the connection details from your Atlas dashboard.

6. **Set Environment Variables:**
- Create a `.env` file in the backend directory and set the following variables:
```
PORT=3001
FIREBASE_API_KEY=<your-firebase-api-key>
MONGO_URI=<your-mongo-uri>
```
7. **Run the Backend**
```
npm start
```
This command will start the backend server.



## Usage

Once KNIT-KART is up and running on your local environment, follow these steps to navigate through the application and make the most of its features:

1. **Homepage:**
- Upon launching the application, you'll land on the homepage. Here, you can explore the latest item listings, featured exchanges, and trending categories.

2. **Navigation:**
- Use the navigation bar to explore different categories such as books, electronics, sports items, and more. Click on a category to view specific item listings within that category.

3. **Viewing Listings:**
- Click on any listed item to view details, including the item description, images, and the user who posted the ad.

4. **Posting Ads:**
- To post your own ad, click on the "Post an Ad" button. Provide details about the item you want to exchange and the items you're looking for in return. Include clear descriptions and images to attract potential exchanges.

5. **Communication:**
- Use the built-in messaging system to communicate with other users interested in your items. Discuss exchange details, arrange meetups, or clarify any queries.

6. **Additional Tips:**
- Keep your item listings clear and accurate to attract more potential exchanges.
- Regularly check your matches and messages for timely responses.
- Participate in community discussions and forums to enhance your KNIT-KART experience.

7. **Contribute to the Community:**
- KNIT-KART thrives on user participation. Contribute to the community by sharing your surplus items, engaging with other users, and providing feedback.

Feel free to explore the various features and functionalities of KNIT-KART. Whether you're looking for specific items or eager to exchange your belongings, KNIT-KART provides a platform for a seamless and collaborative experience within your hostel community.


### Contributing

Thank you for considering contributing to KNIT-KART! Your involvement helps us enhance the platform and create a better experience for all users. Please take a moment to review the guidelines below before getting started:

#### Reporting Bugs or Issues:

If you come across any bugs, issues, or have suggestions for improvements, please feel free to [open a new issue](https://github.com/Rahul-K-Saini/knit-kart/issues). When reporting an issue, include a detailed description of the problem, steps to reproduce, and the expected behavior.

#### Submitting Feature Requests:

We welcome feature requests that align with the project's goals. To submit a feature request, [open a new issue](https://github.com/Rahul-K-Saini/knit-kart/issues) and provide a clear description of the new functionality you'd like to see. Discuss its potential benefits and how it aligns with the project's purpose.

#### Code Contributions:

If you're interested in contributing code to KNIT-KART, follow these guidelines:

1. Fork the repository and create your branch from `main`.
2. Ensure your code follows the project's coding conventions and standards.
3. Test your changes thoroughly.
4. Make sure your commit messages are clear and descriptive.
5. [Open a pull request](https://github.com/Rahul-K-Saini/knit-kart/pulls) with a detailed explanation of your changes.

#### Coding Conventions:

- Follow consistent coding styles, as demonstrated in the existing codebase.
- Use meaningful variable and function names for clarity.
- Keep the code modular and well-organized.

#### Discussions:

Participate in discussions and share your ideas in the [GitHub Discussions](https://github.com/Rahul-K-Saini/knit-kart/discussions) section. Engage with the community to brainstorm new features, address concerns, or provide feedback.

We appreciate your contributions and look forward to collaborating with you to make KNIT-KART even better!

### Acknowledgements

We extend our appreciation to the following:

- **React.js:** For the robust front-end framework.
- **Express.js:** Powering our efficient backend.
- **Firebase:** Providing real-time database and authentication solutions.
- **MongoDB and Mongoose:** Facilitating data management.
- **Tailwind CSS:** Simplifying styling with utility-first approach.
- **GitHub Community:** For open-source collaboration.
- **Contributors:** Thank you to [Arshil Amaan Ansari](https://www.linkedin.com/in/arshil-amaan/), [Shantanu Saini](https://www.linkedin.com/in/shantanu-saini-525a9a27a/) and [Rakesh Kumar Yadav](https://www.linkedin.com/in/rakesh-kumar-yadav-268538252/) who contributed to KNIT-KART.

Your support and the efforts of the open-source community have been instrumental in shaping KNIT-KART.


### Contact

For any inquiries, feedback, or support related to KNIT-KART, feel free to reach out through the following channels:

- **Email:**
  - General Inquiries: [arshil.22709@knit.ac.in](mailto:arshil.22709@knit.ac.in)
  - Technical Support: [rahul.22742@knit.ac.in](mailto:rahul.22742@knit.ac.in)

- **Social Media:**
   
   Connect with our team members
   - [Rahul](https://www.linkedin.com/in/rahulksaini987/)
   - [Arshil](https://www.linkedin.com/in/arshil-amaan)
   - [Shantanu](https://www.linkedin.com/in/shantanu-saini-525a9a27a/)
   - [Rakesh](https://www.linkedin.com/in/rakesh-kumar-yadav-268538252/)
   to stay in the loop.

- **Community Discussions:**
  - Join the discussions in our [GitHub Discussions](https://github.com/Rahul-K-Saini/knit-kart/discussions) section for project-related conversations and community engagement.

We value your input and are here to assist you. Don't hesitate to reach out; your feedback is essential to the ongoing improvement of KNIT-KART.
