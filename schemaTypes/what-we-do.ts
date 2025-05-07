import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whatWeDo',
  title: 'What We Do Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'whatWeDoItem'}],
      description: 'This section shows 3 cards with identical structure.',
      validation: (Rule) => Rule.required().length(3),
    }),
  ],
})
