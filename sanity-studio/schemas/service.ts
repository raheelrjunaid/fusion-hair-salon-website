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
      description: 'The title of the service.',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'The price of the service.',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
})

export default service
