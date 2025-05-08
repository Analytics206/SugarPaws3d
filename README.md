# SugarPaws3D Website Project

SugarPaws3D is a web-based platform designed to showcase fun and engaging 3D models tailored for 3D printing. Whether you're a business or a hobbyist, our primary focus is on character and toy models that bring creativity to life.

This website features examples of our available models, along with direct links to our Patreon for membership access and exclusive content.

## Project Structure

The project is organized as follows:

```
├── sugarpaws3d/
│   ├── public/
│   │   └── models/
│   │       ├── foxbot.png
│   │       └── dragonpet.png
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx                # Home page
│   │   │   ├── about/page.tsx         # About page
│   │   │   ├── contact/page.tsx       # Contact page
│   │   │   └── models/
│   │   │       ├── page.tsx           # Model gallery
│   │   │       └── [slug]/page.tsx    # Individual model (optional)
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ModelCard.tsx
│   │   │   └── PatreonCTA.tsx
│   │   ├── data/
│   │   │   └── models.json            # Model data
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── lib/                       # (Optional) helpers, utilities
│   ├── next.config.js                 # With static export config
│   ├── tailwind.config.js             # Tailwind setup
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
'''

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
