import Markdown from './editors/markdown'

export const schema = {
  home: {
    template: 'document',
    type: 'home',
    name: 'Home Page',
    fields: {
      title: {
        type: 'string',
        name: 'Title'
      },
      subTitle: {
        type: 'string',
        name: 'Sub Title',
      },
      cta: {
        type: 'string',
        name: 'Call to action'
      }
    }
  }
}
