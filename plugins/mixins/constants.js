export default {
  data: () => ({
    filter: {
      first: 10,
      skip: 0,
      title: ''
    },
    emailRules: [
      email => !!email || 'E-mail is required',
      email => /.+@.+\..+/.test(email) || 'E-mail must be valid',
    ],
    districtItems: [
      {
        id: 1,
        name: 'District A'
      },
      {
        id: 2,
        name: 'District B'
      },
      {
        id: 3,
        name: 'District C'
      },
      {
        id: 4,
        name: 'District D'
      },
      {
        id: 5,
        name: 'Agdao District'
      },
      {
        id: 6,
        name: 'Baguio District'
      },
      {
        id: 7,
        name: 'Buhangin District'
      },
      {
        id: 8,
        name: 'Bunawan District'
      },
      {
        id: 9,
        name: 'Calinan District'
      },
      {
        id: 10,
        name: 'Marilog District'
      },
      {
        id: 11,
        name: 'Paquibato District'
      },
      {
        id: 12,
        name: 'Sasa District'
      },
      {
        id: 13,
        name: 'Talomo Central District'
      },
      {
        id: 14,
        name: 'Talomo North District'
      },
      {
        id: 15,
        name: 'Talomo South District'
      },
      {
        id: 16,
        name: 'Tugbok District'
      },
      {
        id: 17,
        name: 'Toril A District'
      },
      {
        id: 18,
        name: 'Toril B District'
      }
  ],
  items: [
    {
      title: 'Name'
    },
    {
      title: 'Email'
    },
    {
      title: 'Date of birth'
    },
    {
      title: 'Phone/mobile number'
    },
    {
      title: 'Home/mailing address'
    },
    {
      title: 'Land Title'
    },
    {
      title: 'Building Plans'
    },
    {
      title: 'Name of Representative'
    }
  ],
  suffixes: [
    'Sr.',
    'Jr.',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
    ]
  })
}
