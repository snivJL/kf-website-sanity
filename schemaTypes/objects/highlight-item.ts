import {defineField, defineType} from 'sanity'

export const highlightItem = defineType({
  name: 'highlightItem',
  title: 'Highlight Item',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'problem', title: 'Problems', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'solution', title: 'Solutions', type: 'array', of: [{type: 'block'}]}),
    defineField({
      name: 'shortText',
      title: 'Short Text',
      type: 'string',
      description: 'This text will be displayed above the video',
    }),
    defineField({name: 'testimonial', title: 'Testimonial', type: 'array', of: [{type: 'block'}]}),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'This blue text will be displayed below the video',
    }),
  ],
})
