import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'useCase',
  title: 'Use Case Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blueSection',
      title: 'The section with a blue text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [{type: 'useCaseItem'}],
      description: 'This section shows 3 use case cards with identical structure.',
      validation: (Rule) => Rule.required().max(3),
    }),
  ],
})
