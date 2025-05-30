import {defineField, defineType} from 'sanity'

const highlights = defineType({
  name: 'highlights',
  title: ' Highlights Section',
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
      name: 'items',
      title: 'Highlight Items',
      type: 'array',
      of: [{type: 'highlightItem'}],
    }),
  ],
})
export default highlights
