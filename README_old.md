# SugarPaws3D Website Project

SugarPaws3D is a web-based platform designed to showcase fun and engaging 3D models tailored for 3D printing. Whether you're a business or a hobbyist, our primary focus is on character and toy models that bring creativity to life.

This website features examples of our available models, along with direct links to our Patreon for membership access and exclusive content.

## Project Structure

The project is organized as follows:

```
SugarPaws3d
├── src
│   ├── assets
│   │   ├── fonts          # Custom font files
│   │   ├── images         # Images for website content
│   │   │   ├── characters # Character model images
│   │   │   ├── prints     # Finished print images
│   │   │   ├── logos      # Logo images
│   │   │   └── banners    # Banner images
│   │   ├── models         # 3D model files for products
│   │   └── styles
│   │       └── main.css   # Main stylesheet for the website
│   ├── components         # Reusable React components
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Header.jsx     # Header component
│   │   ├── ModelViewer.jsx # Component for viewing 3D models
│   │   └── ProductCard.jsx # Component for displaying product information
│   ├── pages              # Main pages of the website
│   │   ├── About.jsx      # About page component
│   │   ├── Contact.jsx    # Contact page component
│   │   ├── Home.jsx       # Home page component
│   │   └── Products.jsx   # Products page component
│   ├── utils              # Utility functions
│   │   └── modelLoader.js # Functions for loading and managing 3D models
│   ├── App.jsx            # Main application file
│   └── index.js           # Entry point for the React application
├── public
│   ├── favicon.ico        # Website favicon
│   ├── index.html         # Main HTML file
│   └── robots.txt         # Instructions for web crawlers
├── package.json           # npm configuration file
├── .gitignore             # Files to ignore in version control
└── README.md              # Project documentation
```

## Getting Started

To get started with the SugarPaws3D website, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Analytics206/SugarPaws3d.git
   ```

2. **Navigate to the project directory**:
   ```
   cd SugarPaws3d
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the development server**:
   ```
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000` to view the website.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

Thank you for checking out the SugarPaws3D website project! We hope you enjoy creating and printing fun 3D models.
