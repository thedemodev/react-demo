import Markdown from './editors/markdown'

export const schema = {
  link: {
    template: 'object',
    type: 'link',
    name: 'Link',
    fields: {
      url: {
        type: 'string',
        name: 'url'
      },
      name: {
        type: 'string',
        name: 'name'
      }
    }
  },
  links: {
    template: 'array',
    type: 'links',
    contains: [{type: 'link', name: 'Link'}]
  },
  menu: {
    template: 'document',
    type: 'menu',
    name: 'Menu',
    fields: {
      links: {
        type: 'links',
        name: 'links'
      }
    }
  },
  homePage: {
    template: 'document',
    type: 'homePage',
    name: 'Home Page',
    fields: {
      title: {
        type: 'string',
        name: 'Title'
      },
      subTitle: {
        type: 'string',
        name: 'Sub Title',
        component: Markdown
      },
      cta: {
        type: 'string',
        name: 'Call to action'
      }
    }
  }
}
