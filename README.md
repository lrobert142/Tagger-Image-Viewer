# Tagger-Image-Viewer

A React front-end to manage and view images by tags

## Key Tasks / Scripts

  * To start the React front end, in Terminal run `npm start`
  * To compile SASS files into CSS files **only once**, run `npm build-css`
  * To compile SASS files into CSS files and **recompile every time a change is detected**, run `npm run watch-css`
    * Note: In both of the above cases, a CSS file containing all compiled styles will be generated at `src/main.css`

# Project Structure

```
public                          // Static public files
├── favicon.ico                 // Website icon for browsers
└── index.html                  // Base React template. Used to 'host' application

src
├── components                  // Directory containing individual, unique components
│   └── test                    // Directory containing tests for each component
│
├── img                         // Directory containing static image files such as logos and background images
│
├── stylesheets                 // Directory for raw, uncompiled SASS stylesheets
│   ├── base                    // Directory for items that apply to more one component such as SASS variables
│   │   └── _reset.sass         // File containing styles that apply site-wide, to multiple components or reset/remove basic behavior to grant easier styling in other SASS stylesheets (for example, removing default margins)
│   │   └── all.sass            // File responsible for including all other SASS files in this directory
│   │
│   ├── components              // Directory for styles applied to only certain, custom components
│   │   └── all.sass            // File responsible for including all other SASS files in this directory
│   │
│   ├── mixins                  // Directory for utility SASS mixins
│   │   └── all.sass            // File responsible for including all other SASS files in this directory
│   │
│   └── main.sass               // File responsible for including each "all.sass" files in all sub-directories for easy compilation of SASS to CSS
│
├── index.js                    // Base React node that includes all components and the compiled CSS stylesheet
│
└── main.css                    // Single stylesheet for the app. Generated by compiling all SASS files
```
