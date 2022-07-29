<div id="top"></div>

![803c3a7d-ef71-43fa-a53d-432828455793-cover](https://user-images.githubusercontent.com/812989/178552600-53d23eff-f351-4c14-8137-8d36d27a597b.jpeg)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-status">Project status</a></li>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#running-it-locally">Running it locally</a></li>
        <li><a href="#project-architecture-and-token-management">Project architecture and token management</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About the project
This Figma plugin is an internal resource for New Relic. It's functionality is closely tied to One Core's (New Relic's design system) design tokens, and components. The goal of the project is to take some of the load of utilizing One Core off of the shoulders of New Relic product designers and place it on the shoulders of Figma itself.

The plugin is automatically installed for all Figma users at New Relic. [Usage stats](https://staging.onenr.io/0oqQao6x5R1) for the plugin are tracked in New Relic (staging). These usage stats have often served as the first warning about bugs before users report them.

### Project status
|Feature|Status|Notes|
|:--|:--|:--|
|Table creator|✅ Shipped|Will need to be updated when table redesign ships!|
|Theme switcher|✅ Shipped|Token library in plugin needs to be [updated regularly](#project-architecture-and-token-management)|
|Color linter|✅ Shipped|Token library in plugin needs to be [updated regularly](#project-architecture-and-token-management)|
|Language linter|✅ Shipped|Used in the plugin via a [language linter NPM package](https://github.com/danielgolden/language-linter)|



### Built With

- [React](https://reactjs.org)
- [webpack](https://webpack.org)
- [TypeScript](http://typescriptlang.org)
- [Prettier precommit hook](https://prettier.io/docs/en/precommit.html)


## Getting started

### Running it locally
- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.

⭐ To change the UI of the plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx).  
⭐ To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).


### [Project architecture and token management](https://www.figma.com/file/8hBp8ilmrgt7bcYqDG0u4g/Key-Project-Report?node-id=2%3A138)
<a href="https://www.figma.com/file/8hBp8ilmrgt7bcYqDG0u4g/Key-Project-Report?node-id=2%3A138"><img width="1057" alt="CleanShot 2022-07-12 at 12 40 32@2x" src="https://user-images.githubusercontent.com/812989/178546994-9533469e-9bda-4f08-8671-532ac7918c9c.png"></a>



## Demo
https://user-images.githubusercontent.com/812989/169329176-a1f0ddd1-f2f7-4ba8-ac4a-588f7773b998.mov


## Acknowledgements
- Boilerplate plugin template: [Figma Plugin React Template](https://github.com/nirsky/figma-plugin-react-template) by [nirsky](https://github.com/nirsky)
- Design for the Grid UI in the table creator came straight from [Table Creator](https://www.figma.com/community/plugin/885838970710285271/Table-Creator) by [Gavin McFarland](https://www.figma.com/@gavinmcfarland)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/newrelic/one-core-toolbox.svg?style=for-the-badge
[contributors-url]: https://github.com/newrelic/one-core-toolbox/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/newrelic/one-core-toolbox.svg?style=for-the-badge
[forks-url]: https://github.com/newrelic/one-core-toolbox/network/members
[stars-shield]: https://img.shields.io/github/stars/newrelic/one-core-toolbox.svg?style=for-the-badge
[stars-url]: https://github.com/newrelic/one-core-toolbox/stargazers
[issues-shield]: https://img.shields.io/github/issues/newrelic/one-core-toolbox.svg?style=for-the-badge
[issues-url]: https://github.com/newrelic/one-core-toolbox/issues
[license-shield]: https://img.shields.io/github/license/newrelic/one-core-toolbox.svg?style=for-the-badge
[license-url]: https://github.com/newrelic/one-core-toolbox/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
