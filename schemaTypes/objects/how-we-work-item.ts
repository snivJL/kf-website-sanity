import {defineType, defineField} from 'sanity'

export const howWeWorkItem = defineType({
  name: 'howWeWorkItem',
  title: 'How We Work Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Item Title',
      type: 'string',
      description: 'e.g Plan your journey',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'problemLabel',
      title: 'Problem Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Problem to be solved',
    }),
    defineField({
      name: 'solutionLabel',
      title: 'Solution Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Our Approach',
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
