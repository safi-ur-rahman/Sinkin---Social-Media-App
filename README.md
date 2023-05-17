# SinkIn

SinkIn is a comprehensive social media web application built with the MERN stack. It offers a wide range of features to enhance the user experience and promote seamless interaction among users.

## Features

- **Profile Visibility**: Users can create profiles and customize their visibility settings, deciding what information and content they want to share with others.

- **Post Management**: Users can create, read, update, and delete posts. They can express their thoughts, share information, and post engaging content to interact with the community.

- **Post Interactions**: SinkIn allows users to like and unlike posts to show their appreciation or support. This feature encourages meaningful engagement and interactions.

- **Comment System**: SinkIn provides a nested comment system that allows users to create, reply to, read, update, and delete comments. This promotes discussions and facilitates conversation within the community.

- **Authentication**: SinkIn incorporates user authentication using JSON Web Tokens (JWT). Users can sign up and log in securely, ensuring their data and interactions are protected.

- **Real-time Private Messaging**: The application features a private messaging system powered by socket.io. Users can exchange messages in real-time, enabling instant and private communication.

- **User Profiles**: SinkIn allows users to view profiles of other users. They can browse through their posts, liked posts, and comments, fostering a sense of community and discovery.

- **Bio Update**: Users can update their bio, which is visible to other users. This feature allows users to share a brief description or information about themselves.

- **Search Functionality**: SinkIn provides a search feature that enables users to search for posts by their title or content. This facilitates easy access to specific content.

- **Responsive Layout**: The application is designed with a fully responsive layout, ensuring an optimal user experience across different devices and screen sizes.

## Installation and Usage

To install and run SinkIn locally, follow the steps below:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/sinkin-app.git
   ```

2. Install dependencies:
   ```
   cd sinkin-app
   npm install
   cd client
   npm install
   ```

3. Create a `.env` file in the root directory and configure the environment variables:
   ```
   cd ..
   touch .env
   ```

4. Open the `.env` file and add the following environment variables. Replace `<YOUR_MONGO_URI>` with your MongoDB connection URI and `<YOUR_TOKEN_KEY>` with your desired token key.
   ```
   MONGO_URI=<YOUR_MONGO_URI>
   TOKEN_KEY=<YOUR_TOKEN_KEY>
   PORT=4000
   ```

5. Start the server:
   ```
   npm run server
   ```

6. Open a new terminal and start the React development server:
   ```
   cd sinkin-app/client
   npm start
   ```

SinkIn provides an engaging and user-friendly platform for social interaction, content sharing, and networking. Its wide array of features, responsive design, and robust functionality make it an ideal choice for users seeking a comprehensive social media experience.

---