import {defineField, defineType} from 'sanity'

const service = defineType({
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
    }),
  ],
})

export default service
