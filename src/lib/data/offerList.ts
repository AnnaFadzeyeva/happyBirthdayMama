import type { Offer } from '$lib/types';

import offerProcurement from '$lib/images/icons_offer/procurement.svg';
import offerConverter from '$lib/images/icons_offer/converter.svg';
import offerDataDone from '$lib/images/icons_offer/dataDone.svg';
import cardConverter from '$lib/images/icons_cards/iconCardConverter.svg';

export const offerList: Offer[] = [
  {
    offerID: 1,
    images: [
      {
        xlink_href: offerProcurement,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'Schnelle Beschaffung von Geodaten',
    offerDescription:
      'ALKIS-Daten Beschaffung deutschlandweit inklusive Eigentümerinformationen,\n      Zielgebiete werden schnell und einfach selektiert',
    button: 'Unverbindlich anfragen',
    link: '/example-link'
  },
  {
    offerID: 2,
    images: [
      {
        xlink_href: offerConverter,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'Schnelle Online-Konvertierung von Geodaten',
    offerDescription:
      'Aus bereits vorhandenen NAS/XML-Dateien für ALKIS-Daten ins NAS oder SHP, kein Abo, keine Wartungskosten',
    button: 'Unverbindlich anfragen',
    link: '/converter'
  },
  {
    offerID: 3,
    images: [
      {
        xlink_href: offerDataDone,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'Liegenschaftsdaten aus 6 Bundesländern verfügbar',
    offerDescription:
      'Berlin, Brandenburg, Hamburg, Niedersachsen, Nordrhein-Westfalen,\n      Rheinland-Pfalz, Thüringen',
    button: 'Zu den Daten',
    link: '/example-link'
  },
  {
    offerID: 4,
    images: [
      {
        xlink_href: cardConverter,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'CISS TDI GmbH arbeitet an Erweiterung des Angebots',
    offerDescription:
      'In Kürze werden Sie ALKIS-Daten aus Sachsen in den Formaten Shape und DXF\n      beziehen können.\n      Abonnieren Sie unseren Newsletter, um als Erster von der Veröffentlichung zu erfahren.',
    button: 'News abonieren',
    link: '/example-link'
  },
  {
    offerID: 5,
    images: [
      {
        xlink_href: cardConverter,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'Amtliche Rasterkarten als Zusatzangebot',
    offerDescription:
      'Digitale Orthofotos (DOP) und Digitale Topografische Karten (DTK)\n      Passgenaues Zuschneiden auf das Projektgebiet in ganz Deutschland',
    button: 'Zu dem Angebot',
    link: '/example-link'
  },
  {
    offerID: 6,
    images: [
      {
        xlink_href: cardConverter,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'Hausumringe (HU) und Hauskoordinaten (HK)',
    offerDescription: 'Bundesweit verfügbar \n\n      Auf Anfrage',
    button: 'Unverbindlich anfragen',
    link: '/example-link'
  },
  {
    offerID: 7,
    images: [
      {
        xlink_href: cardConverter,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'Siedlungsflächen aus Hausumringen',
    offerDescription: 'Für Potenzialflächenanalyse bei EEG-Anlagen\n      Bundesweit verfügbar\n\n      Auf Anfrage',
    button: 'Unverbindlich anfragen',
    link: '/example-link'
  },
  {
    offerID: 8,
    images: [
      {
        xlink_href: cardConverter,
        width: 55,
        height: 55
      }
    ],
    offerTitle: 'CISSMap - detailreiche Übersichtskarte mit Adresssuche',
    offerDescription:
      'Aus OSM-Daten, Hausumringen und -koordinaten\n      Zusätzlich sind die Integration von Geocoding- und Routing-Funktionen geplant.',
    button: 'Mehr über CISSMap',
    link: '/example-link'
  }
];
