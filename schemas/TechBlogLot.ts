export default {
  title: 'Tech Blogs Lot',
  name: 'techBlogsLot',
  type: 'document',

  fields: [
    {
      title: 'Name Of Lot',
      name: 'lotName',
      type: 'string',
    },
    {
      title: 'Lot Number',
      name: 'lotNumber',
      type: 'number',
    },
    {
      type: 'array',
      title: 'Lot of Tech Blogs',
      name: 'techBlogLot',
      validation: (Rule: any) => Rule.length(3).required(),
      of: [
        {
          type: 'object',
          name: 'blogLot',
          title: 'Define Blog Lot',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Serial',
              name: 'serial',
              type: 'number',
            },
            {
              title: 'Title Image',
              name: 'title_image',
              type: 'image',
            },
          ],
        },
      ],
      options: {
          modal: {type: 'dialog', width: '100%'}
      }
    },
  ],
}


// hello brother.