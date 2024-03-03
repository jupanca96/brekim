# Endrock Code Tool
Code Tool with Webpack for compile bundles, lint and fix code, best practices and optimize assets.
It use Webpack, Husky, ESLint, StyleLint, Babel.

## Getting Started
1. Clone the repo or download the zip
2. Move the files to your shopify project root
3. Edit your .gitignore if is necessary to exclude node_modules, package-lock.json or other
4. Remane .env.example to .env file and add your store url
5. Execute `npm install`

## Dev Assets
1. Execute `npm run start`

## Lint
1. Execute `npm run lint`for all assets
2. `npm run lint:sass` only sass files
3. `npm run lint:js || npm run lint:ts` for script files

For fix use npm run fix or fix:sass, fix:js

## Prod Assets
2. Execute `npm run build`

## Upcoming
- [x]  Code Packaging
- [x]  SCSS Linting
- [x]  JS Linting
- [x]  Pre-commit flow
- [x]  TS Linting
- [x]  PR Template
- [ ]  Liquid Linting
- [ ]  Tests
- [ ]  Github Action
- [ ]  Assets Optimization

## Changelog
https://github.com/Endrock/endrock-webpack/compare/v1.4.0...v1.5.0

## Contribute
1. Clone the repo
2. Create a feature or bugfix branch
3. Make your changes
4. Create a PR to request integrate your changes

## Contributors ✨

Thanks go to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/lboiola-github">
          <img src="https://avatars.githubusercontent.com/u/23157669?v=4" width="100px;" alt="Lautaro"/>
          <br />
          <sub>
            <b>Lautaro Boiola</b>
          </sub>
        </a>
        <br />
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/MDarqueaP">
          <img src="https://ca.slack-edge.com/T9W4B8BAP-U04B3QHJH9P-a35c9d07e6fc-512" width="100px;" alt="Manu"/>
          <br />
          <sub>
            <b>Manu Darquea</b>
          </sub>
        </a>
        <br />
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/rafasuarez">
          <img src="https://avatars.githubusercontent.com/u/24548651?v=4" width="100px;" alt="Rafa"/>
          <br />
          <sub>
            <b>Rafa</b>
          </sub>
        </a>
        <br />
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/kurodaSensei">
          <img src="https://avatars.githubusercontent.com/u/19169378?v=4" width="100px;" alt="Alfredo"/>
          <br />
          <sub>
            <b>Alfredo Romero</b>
          </sub>
        </a>
        <br />
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/ERJulian">
          <img src="https://avatars.githubusercontent.com/u/145363198?v=4" width="100px;" alt="Julián"/>
          <br />
          <sub>
            <b>Julián Barrios</b>
          </sub>
        </a>
        <br />
      </td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
