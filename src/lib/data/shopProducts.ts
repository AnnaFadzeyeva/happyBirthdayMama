import type { Product } from '$lib/types';

import cardConverter from '$lib/images/icons_cards/iconCardConverter.svg';
import cardData from '$lib/images/icons_cards/iconCardData.svg';
import cardWeather from '$lib/images/icons_cards/iconCardWeatherHistory.svg';
import converter from '$lib/images/img_bundesland/converter.svg';
import bundesB from '$lib/images/img_bundesland/B.svg';
import bundesNW from '$lib/images/img_bundesland/NW.svg';
import bundesConverter from '$lib/images/img_bundesland/converter.svg';

export const shopProducts: Product[] = [
  {
    images: [
      {
        xlink_href: cardData,
        width: 55,
        height: 55
      },
      {
        xlink_href: bundesB,
        width: 55,
        height: 55
      }
    ],
    title: 'ALKIS',
    description: 'Konvertierung bereits vorhandenen NAS/XML-Dateien (als ZIP-Archiv)',
    format: 'DXF oder SHP',
    additionalDescription: 'bei Eigentümerinformationen werden CSV-Dateien zusätzlich geliefert',
    button: 'Weiter',
    link: '/geodata'
  },
  {
    images: [
      {
        xlink_href: cardConverter,
        width: 55,
        height: 55
      },
      {
        xlink_href: bundesNW,
        width: 55,
        height: 55
      }
    ],
    title: 'Online Konverter',
    description: 'Konvertierung bereits vorhandenen NAS/XML-Dateien (als ZIP-Archiv)',
    format: 'DXF oder SHP',
    additionalDescription: 'bei Eigentümerinformationen werden CSV-Dateien zusätzlich geliefert',
    button: 'Weiter',
    link: '/converter'
  },
  {
    images: [
      {
        xlink_href: cardWeather,
        width: 55,
        height: 55
      },
      {
        xlink_href: bundesConverter,
        width: 55,
        height: 55
      }
    ],
    title: 'COSMO-REA6',
    description: 'Historische Wetterdaten aus dem COSMO-REA6-Modell des Deutschen Wetterdienstes',
    format: 'CSV und SVG',
    additionalDescription:
      'mit einer horizontalen Auflösung von 6 km und zeitlicher Auflösung von 1 Stunde über ca. 25 Jahre (1995 - 2015)',
    button: 'Weiter',
    link: '/weather'
  }
];
