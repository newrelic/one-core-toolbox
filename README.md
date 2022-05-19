![Promotional banner](https://user-images.githubusercontent.com/812989/138165766-7b9b7f8c-b03b-4cdb-8791-e87b4a90667a.jpg)

## Video preview
https://user-images.githubusercontent.com/812989/169329176-a1f0ddd1-f2f7-4ba8-ac4a-588f7773b998.mov

## Run it locally
* Run `yarn` to install dependencies.
* Run `yarn build:watch` to start webpack in watch mode.
* Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.

⭐ To change the UI of the plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx).  
⭐ To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## Toolings
This repo is using:
* React + Webpack
* TypeScript
* Prettier precommit hook

## Credits
- Boilerplate plugin template: [Figma Plugin React Template](https://github.com/nirsky/figma-plugin-react-template) by [nirsky](https://github.com/nirsky)
- Design for the Grid UI in the table creator came straight from [Table Creator](https://www.figma.com/community/plugin/885838970710285271/Table-Creator) by [Gavin McFarland](https://www.figma.com/@gavinmcfarland)
