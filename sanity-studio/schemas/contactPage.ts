import {defineField, defineType} from 'sanity'

const contactPage = defineType({
  title: 'Contact Page',
  name: 'contactPage',
  type: 'document',
  fields: [
    defineField({
      title: 'Info Email',
      name: 'email',
      type: 'string',
      description: 'The email address for general information inquiries.',
    }),
    defineField({
      title: 'Careers Email',
      name: 'careersEmail',
      type: 'string',
      description: 'The email address for careers or job-related inquiries.',
    }),
    defineField({
      title: 'Phone',
      name: 'phone',
      type: 'string',
      description: 'The phone number for contact purposes.',
      validation: (Rule) => Rule.regex(/^\+?[0-9]+$/),
    }),
    defineField({
      title: 'Address',
      name: 'address',
      type: 'string',
      description: 'The physical address for the contact page.',
    }),
  ],
})

export default contactPage
