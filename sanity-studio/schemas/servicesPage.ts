import {defineField, defineType} from 'sanity'

const servicesPage = defineType({
  title: 'Services Page',
  name: 'servicesPage',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
  ],
})

export default servicesPage
