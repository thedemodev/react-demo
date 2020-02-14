export const schema = {
  heroHeader: {
    template: 'object',
    type: 'heroHeader',
    fields: {
      title: {
        type: 'string',
        name: 'title'
      }
    }
  },
  homePage: {
    template: 'document',
    name: 'Home Page',
    type: 'homePage',
    fields: {
      header: {
        type: 'heroHeader',
        name: 'hero header'
      },
      copyright: {
        type: 'string',
        name: 'copyright'
      }
    }
  }
}