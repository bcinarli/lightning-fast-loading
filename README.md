# Lightning Fast Loading
This is a demo application to understand, visualize the effect of optimization techniques, whether they are in the code level, build time or in server setup.

The app is starting from unoptimised, legacy code to modern PWA code. Each stage of changes are available as [branches](https://github.com/bcinarli/lightning-fast-loading/branches/all) to easily see the differences and code changes between the stages. The missing stage branches are the optimizations done in server level, so no code changes.

## Setup
Application is using webpack as build tool with babel and interface is created with React. To reduce inference from framework optimization, a custom app setup is used instead of _create-react-app_ or _nextjs_

For rest api, [mockapi.io]() sample api end-point is created with 18 items.

The images are downloaded from [unsplash.com](), and the name of the images and title of the _products_ in the grid view are the authors of those images.

For the lighthouse testing, instead of development-tools lighthouse setup, lighthouse-cli is used in order to provide _sort of_ isolated environment and more reliable data.

And finally, instead of webpack dev server, a two local Nginx servers created, on for the application itself and the other one is serving the images.

## Stages
Stages as branches are different stages of the optimization throughout the process.

### Stage 0
The initial application without any optimization. 
![Stage 0 Lighthouse Report](https://raw.githubusercontent.com/bcinarli/lightning-fast-loading/main/lighthouse-reports/stage-0.png?raw=true)

### Stage 1 
Minification added to webpack optimization 

### Stage 2
Split chunk definitions added to webpack optimization

### Stage 3
_In Server_, gzip compression defined in Nginx server

### Stage 4
_In Server_, ssl and http/2 protocol have activated in Nginx server

### Stage 5
Application build changed to create modern only code, legacy is removed

### Stage 6
Images converted to webp format, but the image dimensions kept same
_In Server_, long term caching defined for the assets. e.g., 30 days for react and vendors frameworks, 7 days for app, 30 days for images etc.

### Stage 7
Lazy loading added to images (stage 6 and stage 7 is together in stage 7 branch)

### Stage 8
Images resized to serve with meaningful dimensions to where they are visible

### Stage 9
Additional diagnostic refactoring added respectively lighthouse's opportunities suggestiongs

### Stage 10
Service worker and manifest.json definitions are added.

### Stage 11
To mimicing offline, localStorage usage for API fecthing added. (remarks: this has chosen due to simplicity of the test, for real world, a proper offline strategy and respective cache update / invalidation should be set.)
![100% Top score](https://raw.githubusercontent.com/bcinarli/lightning-fast-loading/main/lighthouse-reports/stage-11.png)

After final stage, the application has started to load almost immediately as less than 0.5 seconds.

![Lightning Fast Loading](https://raw.githubusercontent.com/bcinarli/lightning-fast-loading/main/app-screenshot.png?raw-true "Lightning Fast Loading")
