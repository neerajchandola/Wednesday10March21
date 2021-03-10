export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6048c3cf77b744f32a3b5885',
                  title: 'Sanity Studio',
                  name: 'wednesday-10-march-21-studio',
                  apiId: 'cf5b5122-51a9-458d-8a9f-2e32a1299727'
                },
                {
                  buildHookId: '6048c3cf4c42a0e1f55128c1',
                  title: 'Blog Website',
                  name: 'wednesday-10-march-21',
                  apiId: 'b79eb7d9-6cf2-4c46-9624-70087f255419'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neerajchandola/Wednesday10March21',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://wednesday-10-march-21.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
