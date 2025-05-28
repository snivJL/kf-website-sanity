import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Intro Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneLabel',
      title: 'Phone Label',
      type: 'string',
      initialValue: 'Phone:',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'emailLabel',
      title: 'Email Label',
      type: 'string',
      initialValue: 'Email:',
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Send Message',
    }),
    defineField({
      name: 'sendingButtonText',
      title: 'Sending Button Text',
      type: 'string',
      initialValue: 'Sending...',
    }),
    defineField({
      name: 'successToast',
      title: 'Success Toast Message',
      type: 'string',
      initialValue: 'Message sent successfully',
    }),
    defineField({
      name: 'errorToast',
      title: 'Error Toast Message',
      type: 'string',
      initialValue: 'Something went wrong. Please try again.',
    }),
  ],
})
