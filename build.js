/**
 * Build script to inject Google Maps API key from .env file
 * This script reads the API key from .env and creates a production-ready index.html
 */

const fs = require('fs');
const path = require('path');

// Simple dotenv parser (since we can't use external dependencies in this example)
function parseEnvFile(envPath) {
    const env = {};
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        content.split('\n').forEach(line => {
            const match = line.match(/^([^=]+)=(.*)$/);
            if (match) {
                env[match[1].trim()] = match[2].trim().replace(/['"]+/g, '');
            }
        });
    }
    return env;
}

// Get API key from .env file
const env = parseEnvFile(path.join(__dirname, '.env'));
const apiKey = env.GOOGLE_MAPS_API_KEY;

if (!apiKey) {
    console.error('Error: GOOGLE_MAPS_API_KEY not found in .env file');
    console.info('Please create a .env file with your Google Maps API key:');
    console.info('GOOGLE_MAPS_API_KEY=your_actual_api_key_here');
    process.exit(1);
}

// Read the source HTML file
const sourceHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Replace the placeholder with the actual API key
// First, try to replace in the commented script tag
let updatedHtml = sourceHtml.replace('YOUR_API_KEY', apiKey);

// Also uncomment the script tag if it's commented out
updatedHtml = updatedHtml.replace(
    '<!-- <script src="https://maps.googleapis.com/maps/api/js?key=',
    '<script src="https://maps.googleapis.com/maps/api/js?key='
);
updatedHtml = updatedHtml.replace(
    '&callback=initMap" async defer></script> -->',
    '&callback=initMap" async defer></script>'
);

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Write the updated HTML to dist/index.html
fs.writeFileSync(path.join(distDir, 'index.html'), updatedHtml);

console.log('Build completed successfully!');
console.log('Production file created at: dist/index.html');
console.log('Your Google Maps API key has been injected securely.');