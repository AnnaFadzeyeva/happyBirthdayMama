// Importing images
import geodaten from '$lib/images/img_menu/geodaten.png';
import wetterdaten from '$lib/images/img_menu/wetterdaten.png';
import demoprodukte from '$lib/images/img_menu/demoprodukte.png';
import werbeartikel from '$lib/images/img_menu/werbeartikel.png';
import dienstleistungen from '$lib/images/img_menu/dienstleistungen.png';

// Define the data structure with TypeScript
export const menuData = {
    categories: [
        {
            id: "01",
            name: "Produkte",
            items: [
                {
                    image: geodaten,
                    alt: "Geodaten Symbolbild",
                    title: "Geodaten",
                    links: [
                        { name: "ALKIS", url: "/alkis" },
                        { name: "Rasterkarten", url: "/rasterkarten" },
                        { name: "Vektordaten", url: "/vektordaten" }
                    ]
                },
                {
                    image: wetterdaten,
                    alt: "Wetterdaten Symbolbild",
                    title: "Wetterdaten",
                    links: [
                        { name: "COSMO-REA6", url: "/cosmo-rea6" },
                        { name: "Wettervorhersagen", url: "/wettervorhersagen" }
                    ]
                },
                {
                    image: demoprodukte,
                    alt: "Demoprodukte Symbolbild",
                    title: "Demoprodukte",
                    links: [
                        { name: "COSMO-REA6", url: "/cosmo-rea6" },
                        { name: "Wettervorhersagen", url: "/wettervorhersagen" }
                    ]
                },
                {
                    image: werbeartikel,
                    alt: "Werbeartikel Symbolbild",
                    title: "Werbeartikel",
                    links: [
                        { name: "COSMO-REA6", url: "/cosmo-rea6" },
                        { name: "Wettervorhersagen", url: "/wettervorhersagen" }
                    ]
                }
            ]
        },
        {
            id: "02",
            name: "Dienstleistungen",
            items: [
                {
                    image: dienstleistungen,
                    alt: "Dienstleistungen Symbolbild",
                    title: "Konverter",
                    links: [
                        { name: "Dienstleistung 1", url: "/dienstleistung1" },
                        { name: "Dienstleistung 2", url: "/dienstleistung2" },
                        { name: "Dienstleistung 3", url: "/dienstleistung3" }
                    ]
                },
                {
                  image: dienstleistungen,
                  alt: "Dienstleistungen Symbolbild",
                  title: "Dienstleistungen",
                  links: [
                      { name: "Dienstleistung 1", url: "/dienstleistung1" },
                      { name: "Dienstleistung 2", url: "/dienstleistung2" },
                      { name: "Dienstleistung 3", url: "/dienstleistung3" }
                  ]
              }
            ]
        }
    ]
};

