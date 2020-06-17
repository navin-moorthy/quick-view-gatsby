# Project Setup

## Install Gatsby Starter

SOURCE: [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)

Create a new gatsby starter repo with basic structure

```shell
gatsby new gatsby-starter https://github.com/gatsbyjs/gatsby-starter-default
```

Navigate into your new site’s directory

```shell
cd gatsby-starter/
```

Start up the development site

```shell
gatsby develop
```

Site is now running at

```shell
http://localhost:8000
```

UI Tool to visually experiment by quering our data

```shell
http://localhost:8000/___graphql
```

## Modify `gatsby-config.js`

- Change the `siteMetadata`
- Change the `gatsby-plugin-manifest` options as needed.

## Remove boiler-plate files that come with the starter

- Delete all the images
- Delete all the pages expect modify the below pages
- 404.js

  ```jsx
  import React from "react"

  import SEO from "../components/seo"

  const NotFoundPage = () => (
    <>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )

  export default NotFoundPage
  ```
- index.js

  ```jsx
  import React from "react"

  import SEO from "../components/seo"

  const IndexPage = () => <SEO title="Home" />

  export default IndexPage
  ```
- Delete all the components except image & seo

### Install and add Chakra-UI

SOURCE: [gatsby-plugin-chakra-ui](https://github.com/chakra-ui/chakra-ui/tree/master/tooling/gatsby-plugin-chakra-ui)

Install all the project dependencies for Chakra UI

```shell
yarn add gatsby-plugin-chakra-ui @chakra-ui/core @emotion/core @emotion/styled emotion-theming
```

Add gatsby-plugin-chakra-ui as a plugin in `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  plugins: ["gatsby-plugin-chakra-ui"],
}
```

By default, Chakra includes all the providers,

```js
<ThemeProvider theme={theme}>
  <CSSReset />
  <ColorModeProvider>{element}</ColorModeProvider>
</ThemeProvider>
```

We have the option to disable it in `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
}
```

To use our own custom theme, shadow `gatsby-plugin-chakra-ui`,

```js
// src/gatsby-plugin-chakra-ui/theme.js
import { theme as ChakraTheme } from "@chakra-ui/core"

const theme = {
  ...ChakraTheme,
}

export default theme
```

### Style Guide

All the themes tokens comes from theme.js

Page layout only has the layout attributes

**Note: Tried hard to follow the above buide**

### Third Party App Support

Color shades generated from [Smart Swatches](https://smart-swatch.netlify.app/)

Svg optimized with [SVGOMG](https://jakearchibald.github.io/svgomg/)
