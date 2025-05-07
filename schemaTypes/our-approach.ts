import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourApproach',
  title: 'Our Approach',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'graySubHeading',
      title: 'Gray Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blueSubHeading',
      title: 'Blue Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{type: 'stepsItem'}],
      description: 'This section shows 4 steps cards with identical structure.',
      validation: (Rule) => Rule.required().length(4),
    }),
  ],
})
