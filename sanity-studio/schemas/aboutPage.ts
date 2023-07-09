import {defineField, defineType} from 'sanity'

const aboutPage = defineType({
  title: 'About Page',
  name: 'aboutPage',
  type: 'document',
  fields: [
    defineField({
      title: 'Hero Section',
      name: 'heroSection',
      type: 'object',
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
          title: 'Image',
          name: 'image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      title: 'Mission Statement',
      name: 'missionStatement',
      type: 'object',
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
    }),
  ],
})

export default aboutPage
