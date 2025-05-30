import {defineField, defineType} from 'sanity'

export const highlightItem = defineType({
  name: 'highlightItem',
  title: 'Highlight Item',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'problem', title: 'Problems', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'solution', title: 'Solutions', type: 'array', of: [{type: 'block'}]}),
  ],
})
