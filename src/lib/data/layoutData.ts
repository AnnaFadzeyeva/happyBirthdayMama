import type { Link } from '$lib/types';

import geodaten from '$lib/images/img_menu/geodaten.png';
import wetterdaten from '$lib/images/img_menu/wetterdaten.png';
import demoprodukte from '$lib/images/img_menu/demoprodukte.png';
import werbeartikel from '$lib/images/img_menu/werbeartikel.png';
import dienstleistungen from '$lib/images/img_menu/dienstleistungen.png';

export const megaMenuLinks: Link[] = [
  {
    id: 1,
    label: 'Produkte',
    subMenu: [
      {
        id: 1,
        label: 'Geodaten',
        image: geodaten,
        subList: ['Amtliche Nachweise', 'ALKIS', 'Rasterdaten' ]
      },
      {
        id: 2,
        label: 'Wetterdaten',
        image: wetterdaten,
        subList: ['COSMO-REA6', 'MOSMIX', 'Wasseroberflächen-Temperaturen von Seen']
      },
      {
        id: 3,
        label: 'Demoprodukte',
        image: demoprodukte,
        subList: ['Flurkarte Berlin', 'Rasterkarte ...']
      },
      {
        id: 4,
        label: 'Werbeartikel',
        image: werbeartikel,
        subList: ['CISS Kaffeetasse', 'CISS Kuchen']
      }
    ]
  },
  {
    id: 2,
    label: 'Dienstleistungen',
    subMenu: [
      {
        id: 1,
        label: 'Konverter',
        image: dienstleistungen,
        subList: [
          ''
        ]
      },
      {
        id: 2,
        label: 'Manuelles Angebot',
        image: dienstleistungen,
        subList: [
          'Manuelle Datenbeschaffung',
          'Manuelle Dienstleistung (Naturschutzdaten auf Anfrage)'
        ]
      }
    ]
  }
];

import boldDocumentText from '$lib/images/icons_submenu/bold/document-text.svg';
import linearBook from '$lib/images/icons_submenu/linear/book.svg';
import boldBag from '$lib/images/icons_submenu/bold/bag.svg';
import boldProfileCircle from '$lib/images/icons_submenu/bold/profile-circle.svg';
import linearLogin from '$lib/images/icons_submenu/linear/login.svg';
import linearUserAdd from '$lib/images/icons_submenu/linear/user-add.svg';

export const subMenuLinks: Link[] = [
  {
    id: 1,
    label: 'Bestellungen',
    image: boldDocumentText,
    subLinks: [
      {
        label: 'Mein Wunschzettel',
        image: linearBook,
        url: '/wunschzettel'
      },
      {
        label: 'Vorherige Bestellungen',
        image: linearBook,
        url: '/vorherige-bestellungen'
      }
    ]
  },
  {
    id: 2,
    label: 'Einkaufswagen',
    image: boldBag,
    subLinks: [
      {
        label: 'Flurkarte Demo Berlin: Objektliste: 03454036',
        image: linearBook,
        url: '/flurkarte'
      },
      { label: 'Produkt B', image: linearBook, url: '/produkt-b' },
      { label: 'Produkt n...', image: linearBook, url: '/produkt-n' }
    ]
  },
  {
    id: 3,
    label: 'Mein Konto',
    image: boldProfileCircle,
    subLinks: [
      { label: 'Anmelden', image: linearLogin, url: '/user/login' },
      { label: 'Registrieren', image: linearUserAdd, url: '/user/register' }
    ]
  }
];
