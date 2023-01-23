import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import LocationSection from '../sections/LocationSection';
import { FaqCard } from '../components/cards/FaqCard';
import { MenuCard } from '../components/cards/MenuCard';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {

 
  locations: {
    label: 'Locations',
    SectionComponent: LocationSection,
    viewMapButton: true,
    viewAllButton: true,
    cardConfig: {
      CardComponent: LocationCard,
      showOrdinal: false,
    },
  },
  // plans: {
  //   label: 'Plans',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: PlansCard,
  //     showOrdinal: false
  //   }
  // },

  // switch: {
  //   label: 'Switch',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: SwitchCard,
  //     showOrdinal: false
  //   }
  // }, 
  // videos: {
  //   label: 'Videos',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: VideoCard,
  //     showOrdinal: false
  //   }
  // },
    faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false
    },
  },
  menuItems: {
    label: 'Menu Items',
    viewAllButton: true,
    cardConfig: {
      CardComponent: MenuCard,
      showOrdinal: false
    }
  }

}