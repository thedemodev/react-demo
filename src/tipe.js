import Markdown from './editors/markdown'

export const schema = {
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
