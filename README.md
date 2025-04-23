# MNG Events

Repository containing the MNG Events web application developed with Vue.js and TypeScript.

MNG Events is a web application developed with Vue.js and TypeScript. It allows users to create, manage, and view events with features such as location selection, image uploads, and private/public event toggles.

## Features

- **Event Creation**: Users can create events by providing details such as name, description, date, time, location, and price.
- **Image Upload**: Upload custom images for events or use a default image if none is provided.
- **Location Selection**: Select a country, province, and city dynamically based on available data.
- **Private/Public Events**: Toggle between private and public events.
- **Responsive Design**: The application is styled for a seamless user experience across devices.

## Technologies Used

- **Vue.js**: Frontend framework for building the user interface.
- **TypeScript**: Strongly typed JavaScript for better code quality and maintainability.
- **Vee-Validate**: Form validation library for Vue.js.
- **Vuetify**: Material Design component framework for Vue.js.
- **JSON Data**: Used for dynamic country, state, and city selection.

## Project setup

### Install Dependencies
Run the following command to install all required dependencies:

```
npm install
```

### Start Development Server
To start the development server with hot-reloading:

```
npm run serve
```

### Build for Production
To compile and minify the application for production:

```
npm run build
```

### Lint and Fix Files
To lint and automatically fix code issues:

```
npm run lint
```

## Application Structure

The project is organized into the following folders:

- **`components`**: Contains reusable components, such as `EventCreationComponent.vue` and `HubComponent.vue`, which represent individual UI elements.
- **`containers`**: Includes container components that group multiple components and handle the business logic for more complex views.
- **`interfaces`**: Contains TypeScript interfaces that define the structure of the data used in the application:
    - **`event`**: Defines the structure of an event, including properties like `id`, `name`, `description`, `creationTime`, etc.
    - **`location`**: Defines the structure of locations, such as `Country`, `State`, and `City`.
    - **`UserInterface`**: Defines the structure of a user, including properties like `id`, `name`, `email`, etc.
- **`router`**: Contains the Vue Router configuration for navigation between application views.
- **`stores`**: Includes state management stores (using Pinia or Vuex) for handling global data such as authentication or events.
- **`types`**: Contains additional TypeScript type definitions not directly related to the interfaces.
- **`views`**: Contains the main views of the application, representing full pages like the event creation page or the event listing page.
- **`assets`**: Stores static resources such as images, icons, fonts, and JSON files (e.g., `default-image-for-event.svg` and country/state/city data).
- **`styles`**: Contains global styles and theme configurations for the application.
- **`utils`**: Includes utility functions and helpers for common tasks, such as form validation or data formatting.
- **`plugins`**: Contains Vue plugins and third-party libraries used in the application, such as Vee-Validate for form validation and Vuetify for UI components.

## Configuration

For additional configuration, refer to the [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).

## Future Improvements

- **Event Search and Filters**: Allow users to search and filter events by name, location, or date.
- **Enhanced Styling**: Improve the UI/UX with more advanced designs and animations.
- **Backend Integration**: Connect to a backend service for data persistence and user management.