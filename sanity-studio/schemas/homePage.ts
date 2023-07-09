import {defineField, defineType} from 'sanity'

const homePage = defineType({
  title: 'Home Page',
  name: 'homePage',
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
      ],
    }),
    defineField({
      title: 'About Section',
      name: 'aboutSection',
      type: 'object',
      fields: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
        }),
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
    defineField({
      title: 'Brands Section',
      name: 'brandsSection',
      type: 'object',
      fields: [
        defineField({
          title: 'Brand Images',
          name: 'brandImages',
          type: 'array',
          of: [{type: 'image'}],
          validation: (Rule) => Rule.min(4).max(4),
        }),
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
    defineField({
      title: 'CTA Section',
      name: 'ctaSection',
      type: 'object',
      fields: [
        defineField({
          title: 'First CTA Section',
          name: 'firstCTA',
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
        defineField({
          title: 'Second CTA Section',
          name: 'secondCTA',
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
    }),
  ],
})

export default homePage
