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
    }),
    defineField({
      title: 'Careers Email',
      name: 'careersEmail',
      type: 'string',
    }),
    defineField({
      title: 'Phone',
      name: 'phone',
      type: 'string',
    }),
    defineField({
      title: 'Address',
      name: 'address',
      type: 'string',
    }),
  ],
})

export default contactPage
