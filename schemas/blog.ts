interface BlogType {
  title: string
  name: string
  type: string
  fields: {
    title: string
    name: string
    type: string
    initialValue?: string

    readOnly?: boolean
    options?: {
      dateFormat: string
      timeFormat: string
      calendarTodayLabel: string
    }
  }[]
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
      title: 'Created Date/Time',
      name: 'created',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      readOnly: true,
      options: {
        dateFormat: 'ddd, MMM Do YYYY',
        timeFormat: 'h:mm a',
        calendarTodayLabel: 'Today',
      },
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
}

export default Blogs

// hello this thing can be done better

