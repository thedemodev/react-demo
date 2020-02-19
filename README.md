# Tipe React Demo
> A demo Gatsby application that integrates with an early version of Tipe


- [Tipe React Demo](#tipe-react-demo)
  - [Getting started](#getting-started)
  - [Docs](#docs)
  - [Overview](#overview)
  - [Content Schema](#content-schema)
  - [Content Editor](#content-editor)
  - [Tasks](#tasks)

## Getting started
1. Create `.env` file on the root and add values provided from us
2. `yarn`
3. `yarn dev`
4. After site builds, navigate to site(either localhost:8000 or localhost:8001)

## Docs
### Overview
Tipe is a Headless CMS built for developers. You can add the open source editor to your app and use our hosted API to access your content. Tipe is composed of a few parts that work together to help you and your team manage content.

1. Content Schema - create the shape of your content
2. Open Source Content Editor - used to create and edit documents
3. Documents - your content
4. SDKs - helpers to access the API


### Content Schema
> Create a schema in your code. You are in control.

The content editor uses this schema as a source of truth to render a form for your team to create documents

**Basic Schema**
```js
{
  homePage: {
    // this template is for creating documents. There are other types of templates. Only documents
    // types can be used to create documents.
    template: 'document',
    // used to reference this template with the API
    type: 'homePage',
    // name of the template that will be used on the content editor
    name: 'Home Page',
    // description of fields for this template. ALl documents from this template
    // will have these fields
    fields: {
      // key of the field that will be used in the API
      title: {
        // the type of the field. There are 3 primitive types, 'string', 'number', 'boolean'
        type: 'string',
        name: 'Title'
      }
    }
  }
}
```

**Collection Types**
```js
{
  hero: {
    // object types can be used tp group fields together
    template: 'object',
    type: 'hero',
    name: 'Hero',
    // has fields just like a document template
    fields: {
      title: {
        type: 'string',
        name: 'Title'
      },

      subTitle: {
        type: 'string',
        name: 'Sub title'
      }
    }
  },
  homePage: {
    template: 'document',
    type: 'homePage',
    name: 'Home Page',
    fields: {
      hero: {
        type: 'hero', // ref the object type 
        name: 'Hero'
      }
    }
  }
}
```

**Custom Components**
```js
const MyCustomComponent = (props) => <input value={props.value}  onChange={e => props.setValue(e.target.value)}/>

{
  homePage: {
    template: 'document',
    type: 'homePage',
    name: 'Home Page',
    fields: {
      title: {
        type: 'string',
        name: 'Title',
        component: MyCustomComponent // use any component you want for any field
      }
    }
  }
}
```


### Content Editor
> The content editor is a Gatsby theme for this demo, `@tipe/gatsby-theme-tipe`

```javascript
{
  plugins: [
    resolve: `@tipe/gatsby-theme-tipe`,
      options: {
        // this is the relative path on your existing site that you will find your tipe theme dashboard
        // ex: localhost:yoursiteroot/tipe
        basePath: '/tipe',
        // this is your tipe project id
        project: process.env.TIPE_PROJECT,
        // this is your tipe projects environment
        environmentForSdk: process.env.TIPE_ENVIRONMENT,
        // path to your schema
        schemaPath: path.resolve('./src/tipe'),
        // your tipe apikey
        apiKey: process.env.TIPE_API_KEY,
      },
  ]
}
```

## Tasks
1. Make edits to hero subtitle content on Tipe
2. Make hero title dynamic by adding it to Tipe
  * Extra: Make subtitle handle and support markdown
  * Extra: Add nav links
