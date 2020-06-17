# Project Setup

## Install Gatsby Starter

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
