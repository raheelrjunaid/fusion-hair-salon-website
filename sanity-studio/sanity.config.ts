import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['homePage', 'aboutPage', 'contactPage', 'servicesPage'])

export default defineConfig({
  name: 'default',
  title: 'Fusion Beauty and Hair Salon',

  projectId: 'q60emoop',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Home Page').id('homePage').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('homePage').documentId('homePage')
            ),
            S.listItem()
              .title('About Page')
              .id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('Contact Page')
              .id('contactPage')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
            S.listItem()
              .title('Services Page')
              .id('servicesPage')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),

            // Regular document types
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.documentTypeListItem('serviceSection').title('Service Sections'),
            S.documentTypeListItem('service').title('Services'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    //
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
