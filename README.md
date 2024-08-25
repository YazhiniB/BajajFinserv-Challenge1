# Bajaj Finserv Health Challenge - Frontend

## Overview

This is the frontend application for the Bajaj Finserv Health Challenge. The app is built with React and uses Ant Design for UI components. It communicates with the backend API to process JSON input and display results.

## Features

- **Text Input Field**: Accepts JSON data and validates format on submission.
- **Multi-Select Dropdown**: Allows filtering of results based on selected options.
- **Dynamic Rendering**: Displays filtered results based on user selection.
- **Title**: The browser tab title is set to your roll number.

## Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/frontend-repo.git
    cd frontend-repo
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory and add the following line:

    ```
    REACT_APP_API_URL=https://bajajfinservchallenge1-api.onrender.com/bfhl
    ```

4. **Run the Application Locally**

    ```bash
    npm start
    ```

5. **Build the Application**

    ```bash
    npm run build
    ```

## Deployment

To deploy the application, push your changes to GitHub and connect your repository to a hosting provider like Render, Vercel, or Netlify.

## API Endpoint

The frontend interacts with the following API endpoint:

- **POST** `/bfhl`: Process the input JSON and return the results.

## Usage

1. Enter JSON data into the text input field and click "Submit."
2. Select the desired filters from the dropdown menu.
3. View the filtered results displayed on the page.

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, please contact [your-email@example.com](mailto:your-email@example.com).
