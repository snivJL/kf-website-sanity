import {defineField, defineType} from 'sanity'

export const whatWeDoItem = defineType({
  name: 'whatWeDoItem',
  title: 'What We Do Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Card Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Use cases',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Target (hash or slug)',
      type: 'string',
      description: 'e.g. "#use-cases" or "/some-page"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blueLines',
      title: 'Blue Sentences',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Exactly 4 sentences—these will be styled in blue.',
      validation: (Rule) => Rule.required().length(4),
    }),
    defineField({
      name: 'grayLines',
      title: 'Gray Sentences',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Exactly 3 sentences—these will be styled in gray.',
      validation: (Rule) => Rule.required().length(3),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'media',
    },
  },
})
