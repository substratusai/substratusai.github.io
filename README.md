# Substratus Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
You can view live website here: [https://substratus.ai](https://substratus.ai)

### Installation

```
yarn
```

### Local Development

```
yarn start
# npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Notebooks

A lot of the documents on this website are generated from Jupyter Notebooks. This allows for testing documentation.

To edit the files, start a local Jupyter Lab instance.

```
npm run notebook
```

Convert the notebook files to markdown.


```
npm run convert-notebooks
```

You can clear notebook outputs:

```
npm run clear-notebooks
```

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Assets

#### Main Icon

Source: https://favicon.io/favicon-generator/

See: `./scratch/favicon_io/`

Settings:

* Letter: "S" (capital)
* Font: Saira Stencil One

#### General Icons

Source: https://fonts.google.com/icons

Settings:

* Weight: 100 (min)
* Grade: 0 (middle)
* Optical Size: 48 (max)

