export default {
  title: 'Stereotype',
  name: 'Stereotype',
  type: 'document',

  fields: [
    {
      name: 'Stereotype',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
  ],
}
