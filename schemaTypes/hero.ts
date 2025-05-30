import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingBlue',
      title: 'Heading Blue',
      type: 'string',
    }),
    defineField({
      name: 'ctas',
      title: 'Call to Action Phrases',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (rule) => rule.required().length(3),
      description: 'This section shows 3 boxes with identical structure.',
    }),
    defineField({
      name: 'quoteText',
      title: 'Quote Text',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue:
        '“Every industry will be redefined by AI. If you’re not thinking about how to apply it, you’re already behind.”',
    }),
    defineField({
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
      initialValue: 'Sundar Pichai, CEO of Google.',
      validation: (rule) => rule.required(),
    }),
  ],
})
