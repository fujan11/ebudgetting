export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'renstra',
      displayName: 'Renstra',
      meta: {
        icon: 'vuestic-iconset-statistics',
      },
      disabled: true,
      children: [
        {
          name: 'data-renstra',
          displayName: 'Data-renstra', 
        },
        {
          name: 'bidangrenstra',
          displayName: 'Bidang-renstra',
        },
        {
          name: 'tahunrenstra',
          displayName: 'Tahun-renstra',
        },
      ],
    },
    {
      name: 'sebaranrenstra',
      displayName: 'Sebaran-renstra',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'datarkat',
      displayName: 'Data-RKAT',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'programkerja',
      displayName: 'Program-kerja',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'pengajuandana',
      displayName: 'Pengajuan-Dana',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'lpj',
      displayName: 'LPJ',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'pagu',
      displayName: 'Pagu',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'unit_kerja',
      displayName: 'Unit-Kerja',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
  ] as INavigationRoute[],
}
