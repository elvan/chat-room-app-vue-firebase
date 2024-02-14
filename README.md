# Chat Room App with Vue and Firebase

![Screenshot](https://raw.githubusercontent.com/elvan/chat-room-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-14%20120723.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/chat-room-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-14%20120744.png)

---

![Screenshot](https://raw.githubusercontent.com/elvan/chat-room-app-vue-firebase/main/_screenshots_/Screenshot%202024-02-14%20120759.png)

## Description

This project is a real-time chat application built with Vue.js and Firebase. It demonstrates the use of modern web development technologies to create a dynamic and interactive user experience. The app allows users to sign up, log in, and participate in chat rooms, showcasing real-time messaging capabilities powered by Firebase Firestore and Firebase Authentication.

## Features

- **Real-Time Chat**: Utilizing Firebase Firestore, the application offers real-time chat functionality, allowing messages to be sent and received instantly.
- **User Authentication**: Firebase Authentication is used to manage user sign-up, login, and logout processes, ensuring secure access to the chat room.
- **Responsive Design**: The app features a clean, user-friendly interface that adapts to various screen sizes, ensuring a seamless experience across devices.
- **Auto-scrolling Messages**: As new messages arrive, the chat window automatically scrolls to the bottom, keeping the latest messages in view.
- **Timestamps Formatting**: Messages are timestamped and displayed using `date-fns` to provide a friendly, relative format (e.g., "5 minutes ago").

## Installation

### Prerequisites:

- Node.js and npm (Node Package Manager)
- Vue CLI installed globally (`npm install -g @vue/cli`)
- Firebase account for setting up Firestore and Authentication

### Environment Setup:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies with `npm install`.
3. Create a Firebase project and configure Authentication and Firestore.
4. Add your Firebase project configuration to `src/firebase/config.js` (refer to `src/firebase/config.js.example` for the template).

### Installation Commands:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

## Usage

After completing the installation steps, you can start the development server with:

```bash
npm run serve
```

Navigate to `http://localhost:8080/` to access the application. You can sign up for an account or log in if you already have one, and then start chatting in real-time.

For deploying the application, you can build the project using `npm run build` and deploy the `dist` folder contents to your preferred hosting service.
