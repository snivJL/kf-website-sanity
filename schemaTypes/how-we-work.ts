import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'howWeWork',
  title: 'How We Work Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'How we work. Put simply.',
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
      title: 'How We Work Items',
      type: 'array',
      of: [{type: 'howWeWorkItem'}],
      validation: (Rule) => Rule.min(3).max(6).required(),
    }),
  ],
})
