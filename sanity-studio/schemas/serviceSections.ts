import {defineField, defineType} from 'sanity'

const serviceSection = defineType({
  title: 'Service Sections',
  name: 'serviceSection',
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
    defineField({
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})

export default serviceSection
