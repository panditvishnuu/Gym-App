# Golds Gym - React Fitness App

Golds Gym is a modern React Fitness App that allows users to explore a vast database of exercises, categorized by muscle groups and types. This project utilizes the rapidapi ExerciseDB API to fetch exercise data, eliminating the need for manual data entry. The app offers a user-friendly interface with features such as exercise browsing, pagination, detailed exercise descriptions, related YouTube videos, and more.

## Installation

To run Golds Gym locally on your machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/panditvishnuu/Gym-App
   ```

2. Navigate to the project directory:

   ```bash
   cd Gym-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add your rapidapi key to the `.env` file:

     ```
     REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
     ```

5. Run the app:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` to view the app.

## Features

- Choose exercise categories and specific muscle groups.
- Browse more than one thousand exercises with practical examples.
- Pagination for easy navigation through exercises.
- Exercise details including muscle groups, equipment, and instructions.
- Pull related videos from YouTube for visual references.
- Display similar exercises for variety in workouts.

## Tech Stack

- React: Frontend library for building user interfaces.
- React Router: Routing library for React applications.
- Axios: Promise-based HTTP client for making API requests.
- Material UI: React components library for faster and easier web development.
- RapidAPI: API marketplace for integrating APIs into applications.

## Credits

- **ExerciseDB API**: Provided by RapidAPI, powers the exercise data for the app.
- **Material UI Icons**: Used for iconography in the app's interface.


---

Feel free to contribute to the project by submitting issues or pull requests. Happy coding!