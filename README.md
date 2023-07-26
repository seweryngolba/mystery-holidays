# Mystery Holidays - Destination Randomizer

This is a simple web application called "Mystery Holidays" that allows users to draw random travel destinations with different attributes such as country, city/region, type of travel, and attraction. The app also changes the background image to showcase the chosen destination.

## Demo

You can view a live demo of the "Mystery Holidays" web application by visiting the following link: [Demo Page](https://mystery-holidays-s-golba.netlify.app/)

## Getting Started

To use this web application, you can follow these steps:

1. Clone or download the project repository to your local machine.

2. Open the `index.html` file in your web browser.

3. Click on the "Draw a destination" button to get a random travel destination displayed on the screen.

## Features

- **Random Destination:** The application provides a button that, when clicked, selects a random travel destination from the predefined list of destinations and displays its attributes on the screen.

- **Dynamic Background:** When a destination is drawn, the background image of the page changes to showcase an image of the selected destination.

## Technologies Used

The project utilizes the following technologies:

- **HTML:** The structure of the web page.
- **CSS:** The styles and layout of the elements.
- **JavaScript:** The logic to handle the random destination selection and updating the page.

## Data Source

The destinations' data is stored in the JavaScript file `main.js` as an array of objects. Each object represents a travel destination with properties like country, city, type, attraction, and photo URL.

```js
// Example destination object
{
  country: "France",
  city: "Paris",
  type: "Citybreak",
  attraction: "Eiffel Tower",
  photo: "./assets/tower.jpg",
}
```

## Customization

You can customize the list of destinations and their attributes by modifying the destinations array in the main.js file. Feel free to add or remove destinations to fit your preferences.

You can also customize the styles of the application by updating the style.css file. The current styles define the layout, colors, and responsiveness for different screen sizes.

## Responsive Design

The web application is designed to be responsive to different screen sizes, thanks to the CSS media queries. The layout and font sizes will adapt to small, medium, and large screens.

## Credits

The background images used in the project are for illustration purposes and are sourced from various image websites like Pexels and Unsplash. Please make sure to replace them with your own images or use royalty-free images if you plan to deploy this project.

## End

Thank you for using the Mystery Holidays web application! Enjoy your random travel destinations!
