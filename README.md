# Chrome Extension Starter

Boilerplate for building a chrome extension.

## It contains the following features:
- Babel for transpiling
- Vue js
- webpack 4 bundling

## Usage: 
Install node modules
```
npm install
```

Start in developement mode
```
npm start
```

Build
```
npm run build
```

## Files Included:
- `public/manifest.json` - Contains permissions, name, icons and other details required for a chrome plugin.
- `src/init.js` - Contains initialization scripts.
- `src/popup/pop.js` - Javascript file with vue configuration for popup in the extension. 
- `src/options/options.js` - Javascript file with vue configuration for options page. 
- `src/app/app.js` - Javascript file with scripts that to be loaded on a page load. 
- `src/popup/popup.vue` - Vue js entry file for popup page. 
- `src/options/options.vue` - Vue js entry file for options page. 
