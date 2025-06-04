import {defineType, defineField} from 'sanity'

export const useCaseItem = defineType({
  name: 'useCaseItem',
  title: 'Use Case Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'What we did for',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description:
        'Name of short description of the company or organization the use case is related to. Appears in blue',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hook',
      title: 'Hook',
      description: 'This is the catchy phrase that will be displayed on the card.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description:
        'This is the text that will be displayed on the button displayed on the card in the homepage.',
      initialValue: 'Learn more',
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
      name: 'objective',
      title: 'Objective',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'painPoints',
      title: 'Pain Points',
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
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'korefocusRole',
      title: 'Korefocus Role',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
