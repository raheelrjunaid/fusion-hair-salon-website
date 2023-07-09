import {defineField, defineType} from 'sanity'

const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the person providing the testimonial.',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'The role or position of the person providing the testimonial.',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The actual testimonial quote.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default testimonialSchema
