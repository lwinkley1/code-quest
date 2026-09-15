# Code Quest

Code Quest is a cross-platform educational application designed to make learning more accessible and engaging through structured, modular courses. Users can discover courses across different subjects, enroll in courses, work through individual learning modules, and track their progress. The platform also allows new courses and lessons to be created directly within the application.

Built with **React Native and Expo** on the frontend and **Supabase** for authentication and persistent data storage, Code Quest is designed to provide a simple, mobile-friendly learning experience.

## Features

### User Authentication

Code Quest includes a complete account and authentication flow powered by Supabase.

Users can:

* Create an account
* Select an account type
* Sign in with email and password
* Maintain authenticated sessions across app launches
* Sign out securely

Authentication sessions are persisted locally using AsyncStorage and automatically refreshed while the application is active.

### Course Discovery

Users can browse a catalog of available courses organized by subject.

The application dynamically retrieves course information from Supabase and groups courses into subject areas, including:

* Math
* Science
* History
* English

Each course includes a description, course content, and a collection of learning modules.

### Course Enrollment

Users can enroll in courses that interest them and maintain a personalized list of active courses.

Enrollment data is persisted to the user's profile in Supabase, allowing progress to remain available across sessions.

Users can also unenroll from courses they no longer want to follow.

### Modular Learning

Courses are divided into individual learning modules that users can complete sequentially.

Modules support different learning activities, including:

* **READ** modules for instructional content
* **WRITE** modules for interactive learning activities

Students can navigate between lessons using a structured course interface and progress through a course one module at a time.

### Progress Tracking

Code Quest automatically tracks completed modules for each enrolled course.

As users move through lessons:

* Completed modules are recorded
* Course progress is persisted in the database
* Completed lessons are visually distinguished
* A progress bar displays the user's current position within a course

This allows students to leave a course and return later without losing their progress.

### Course Creation

The platform includes an interface for creating new courses directly within the application.

Course creators can define:

* Course name
* Subject
* Description
* Module titles
* Module types
* Module content

Additional modules can be dynamically added or removed before the course is published.

Courses are stored in Supabase and become available through the application's course catalog.

## Tech Stack

### Frontend

* **React Native** for cross-platform application development
* **Expo** for development and deployment tooling
* **Expo Router** for file-based navigation
* **React Native Paper** for interface components
* **React Context** for shared application state
* **AsyncStorage** for persistent local authentication state

### Backend

* **Supabase Authentication** for user registration and login
* **Supabase Database** for users, courses, enrollment, and progress data
* **Supabase JavaScript Client** for frontend-to-backend communication

### Languages

* JavaScript
* JSX

## Architecture

Code Quest separates UI components, application state, database configuration, and reusable application logic into dedicated directories.

```text
code-quest/
├── app/
│   ├── createAccount.js
│   ├── index.js
│   └── tabs/
│       ├── courses/
│       ├── home/
│       └── profile.js
│
├── components/
│   ├── courseDetails/
│   ├── courses/
│   ├── home/
│   ├── login/
│   └── profile/
│
├── context/
│   ├── CoursesContext.js
│   └── UserContext.js
│
├── database/
│   └── db.js
│
├── utils/
│   ├── useCompleteModule.js
│   ├── useCourses.js
│   ├── useCreateAccount.js
│   ├── useEnroll.js
│   ├── useImage.js
│   ├── useSession.js
│   ├── useSignIn.js
│   ├── useSignOut.js
│   ├── useUnenroll.js
│   └── useUserData.js
│
└── assets/
```

### Application Layer

The `app/` directory contains the application's screens and routing structure. Expo Router provides file-based navigation between authentication, home, course, lesson, and profile views.

### Component Layer

Reusable UI elements are separated into the `components/` directory and organized by feature. This keeps larger screens composed of smaller components responsible for individual pieces of functionality.

### State Management

Shared application state is managed through React Context.

`UserContext` maintains user-specific information, while `CoursesContext` manages course data, the currently selected course, and enrollment state.

### Data Layer

The application communicates with Supabase through a centralized database client.

Reusable hooks abstract common operations such as:

```text
useCourses()
useEnroll()
useUnenroll()
useCompleteModule()
useCreateAccount()
useSignIn()
useSignOut()
useSession()
useUserData()
```

This separates database and authentication logic from the UI components that consume it.

## Getting Started

### Prerequisites

Install:

* Node.js
* npm
* Expo

Clone the repository:

```bash
git clone https://github.com/lwinkley1/code-quest.git
cd code-quest
```

Install dependencies:

```bash
npm install
```

### Supabase Configuration

Code Quest requires a Supabase project for authentication and database functionality.

Create a `config.json` file in the project root containing your Supabase configuration:

```json
{
  "SUPABASE_URL": "YOUR_SUPABASE_URL",
  "SUPABASE_ANON_KEY": "YOUR_SUPABASE_ANON_KEY"
}
```

Do not commit credentials or private configuration values to source control.

### Run the Application

Start the Expo development server:

```bash
npm start
```

You can then run the application on your desired platform.

For iOS:

```bash
npm run ios
```

For Android:

```bash
npm run android
```

For web:

```bash
npm run web
```

## Design Goals

Code Quest was built around a few core ideas:

**Accessibility:** Learning material should be easy to navigate and available through a simple, mobile-friendly interface.

**Modularity:** Courses are broken into smaller lessons so students can make progress incrementally rather than navigating large blocks of content.

**Personalization:** Enrollment and progress are associated with individual users, allowing each student to maintain their own learning path.

**Extensibility:** Courses and modules are represented as structured data rather than hard-coded screens, making it possible to expand the course catalog without rebuilding the application interface.

## What I Learned

Building Code Quest involved working across the full application stack, from designing reusable React Native components to managing authentication and persistent application data with Supabase.

A particularly interesting part of the project was designing the relationship between courses, users, enrollment, and module completion. Rather than treating each course as a static page, the application dynamically retrieves course data and uses shared state to create a personalized experience for each user.

The project also gave me experience building a component-based mobile application, designing reusable hooks for backend operations, managing asynchronous state, implementing persistent authentication, and translating an educational product idea into a working application.

## Future Improvements

Potential extensions include:

* Richer interactive WRITE modules
* Teacher-specific course management tools
* More detailed student progress analytics
* Search and filtering across the course catalog
* Course recommendations
* Assessments and quizzes
* Additional lesson content types
* Improved validation and error handling
* Offline course access
* Expanded accessibility support

## Author

**Lauren Winkley**

Stanford University
Computer Science
