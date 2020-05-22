export interface Villager {
  id: number;
  fileName: string;
  name: {
    'name-en': string;
  };
  personality: string;
  birthdayString: string;
  birthday: string;
  species: string;
  gender: string;
  catchPhrase: string;
}

export enum Locations {
  River = 'River',
  Pond = 'Pond',
  Sea = 'Sea'
}

export enum Rarity {

}

export interface Availability {
  'month-northern': string;
  'month-southern': string;
  'time': string;
  'isAllDay': boolean;
  'isAllYear': boolean;
  'location': string;
  'rarity': string;
}

export interface Month {
  month: string;
  available: boolean;
}

interface Schedule {
  northern: Month[],
  southern: Month[]
}

export interface Creature {
  id: number;
  fileName: string;
  name: {
    'name-en': string;
  };
  availability: Availability;
  price: string;
  catchPhrase: string;
  museumPhrase: string;
  uiSchedule: Schedule;
}

export interface Fish extends Creature {
  priceCj: string;
  shadow: string;
}

export interface Insect extends Creature {
  priceFlick: string;
}
