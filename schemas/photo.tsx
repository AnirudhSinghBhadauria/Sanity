export default {
  title: 'CDN Generator',
  name: 'cdnGenerator',
  type: 'document',

  fields: [
    {
      name: 'photoOne',
      tilte: 'Generate CDN',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Image',
          title: 'Image',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
            },
          ],
        },
      ],
    },
    {
      title: 'Stereotype',
      name: 'Stereotype',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'Document1',
      title: 'Document',
      type: 'file',
    },
    {
      name: 'Document2',
      title: 'Document',
      type: 'file',
    },
    {
      name: 'Document3',
      title: 'Document',
      type: 'file',
    },
    {
      name: 'Document4',
      title: 'Document',
      type: 'file',
    },
    {
      name: 'Document5',
      title: 'Document',
      type: 'file',
    },
    {
      name: 'Document6',
      title: 'Document',
      type: 'file',
    },
  ],
}

// this is another shema for blogs
// is this better thank you for responding so quickly,
// hello i am here for the third time
// hello iam here for the third time
//  doing metadata stuff on centre of excellence
