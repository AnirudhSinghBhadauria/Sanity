interface BlogType {
  title: string
  name: string
  type: string
  fields: {title: string; name: string; type: string}[]
}

const Blogs: BlogType = {
  title: 'blog',
  name: 'blog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Age',
      name: 'age',
      type: 'number',
    },
    {
      title: 'Title Image',
      name: 'title_image',
      type: 'image',
    },
  ],
}

export default Blogs
