# Link Rubber - Navigation Safety Chrome Extension

Link Rubber is a Chrome extension that intercepts navigation events and checks URLs for safety before allowing browsing. It provides immediate feedback on whether a site is safe, suspicious, or unsafe.

## Features

- **Real-time URL Scanning**: Intercepts navigation and checks URL safety before loading the page
- **User Control**: Choose whether to proceed to a site after reviewing its safety status
- **Modern UI**: Clean, intuitive interface built with Next.js and Shadcn UI
- **Threat Intelligence**: Integration with URL scanning APIs (URLscan.io mock implementation for MVP)
- **Dashboard**: Web-based dashboard for extension management and settings

## Tech Stack

- **Next.js**: For the dashboard and configuration interface
- **TypeScript**: Type-safe code throughout the project
- **Shadcn UI**: Modern, accessible UI components
- **Chrome Extension APIs**: For browser integration
- **Webpack**: For bundling the extension

## Project Structure

- `/src/extension/`: Chrome extension source code
  - `background.ts`: Background script for navigation interception and URL scanning
  - `content.ts`: Content script for UI rendering in web pages
- `/public/extension/`: Static extension assets
  - `popup.html`: Extension popup interface
  - `popup.js`: JavaScript for extension popup
  - `scanning.html`: Loading page shown during URL scans
- `/src/app/`: Next.js dashboard pages
  - `page.tsx`: Main dashboard page
  - `settings/page.tsx`: Extension settings page

## Development

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Chrome browser

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/link-rubber.git
   cd link-rubber
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server for the dashboard:
   ```bash
   npm run dev
   ```

4. Build the Chrome extension:
   ```bash
   npm run build:extension
   ```

5. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` directory

### Building for Production

To build both the dashboard and extension:

```bash
npm run build:all
```

## Usage

1. After installing the extension, it will automatically start monitoring your navigation.
2. When you click a link, Link Rubber will check the URL before loading it.
3. A dialog will appear showing the safety status: Safe, Suspicious, or Unsafe.
4. Choose whether to proceed to the site or cancel the navigation.
5. Access settings and history through the extension popup or dashboard.

## MVP Limitations

This is an MVP (Minimum Viable Product) with some limitations:

- Uses mock implementation for URL scanning (random verdicts for demonstration)
- Limited settings functionality in the UI
- Basic error handling

## License

MIT
