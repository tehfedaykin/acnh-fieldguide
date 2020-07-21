export interface Name {
  'name-USen': string;
  'name-EUen': string;
  'name-EUde': string;
  'name-EUes': string;
  'name-USes': string;
  'name-EUfr': string;
  'name-USfr': string;
  'name-EUit': string;
  'name-EUnl': string;
  'name-CNzh': string;
  'name-TWzh': string;
  'name-JPja': string;
  'name-KRko': string;
  'name-EUru': string;
}

export interface Villager {
  id: number;
  fileName: string;
  name: Name;
  personality: string;
  birthdayString: string;
  birthday: string;
  species: string;
  gender: string;
  catchPhrase: string;
  iconUri: string;
  imageUri: string;
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
  name: Name;
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

export interface Fossil {
  fileName: string;
  name: Name;
  price: number;
  museumPhrase: string;
  imageUri: string;
}
