const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/PopisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/Pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/ONama', component: () => import('pages/ONamaPage.vue') },
      { path: '/Lokacije', component: () => import('pages/LokacijePage.vue') },
      { path: '/Prijava', component: () => import('pages/PrijavaPage.vue') },
      { path: '/Registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/PopisKnjigaBaza', component: () => import('pages/PopisKnjigaBazaPage.vue') },
      { path: '/Rezervacije', component: () => import('pages/RezervacijePage.vue') }

    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') },
      { path: '/admin/PopisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/admin/Pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/admin/Popis_korisnika', component: () => import('pages/Popis_korisnikaPage.vue') },
      { path: '/admin/Unos_knjiga', component: () => import('pages/Unos_knjigaPage.vue') },
      { path: '/admin/logout', component: () => import('pages/LogoutPage.vue') },
      { path: '/admin/PopisKnjigaBaza', component: () => import('pages/PopisKnjigaBazaPage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
