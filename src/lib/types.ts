export interface Link {
  id: number;
  label: string;
  image?: string;
  subMenu?: Link[]; // Recursive type for subMenu
  subList?: string[];
  subLinks?: {
    label: string;
    image: string;
    url: string;
  }[];
}

export interface Image {
  xlink_href: string;
  width: number;
  height: number;
}

export interface Product {
  images: Image[];
  title: string;
  description: string;
  format: string;
  additionalDescription: string;
  button: string;
  link: string;
}

export interface Offer {
  offerID: number;
  images: Image[];
  offerTitle: string;
  offerDescription: string;
  button: string;
  link: string;
}
