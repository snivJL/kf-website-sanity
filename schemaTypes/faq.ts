import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'faqItem',
      title: 'FAQ Item',
      type: 'array',
      of: [{type: 'faqItem'}],
      description: 'This section shows 6 FAQ items with identical structure.',
      validation: (Rule) => Rule.required().length(6),
    }),
  ],
})
