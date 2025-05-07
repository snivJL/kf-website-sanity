import {defineType, defineField} from 'sanity'

export const stepItem = defineType({
  name: 'stepsItem',
  title: 'Steps Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'index',
      title: 'Index',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
