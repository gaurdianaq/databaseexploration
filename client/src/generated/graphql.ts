export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Character = {
  id: Scalars['ID'];
  name: Scalars['String'];
  race: Race;
  money: Scalars['Int'];
  isAlive: Scalars['Boolean'];
  faction: Faction;
  current_location: Location;
  home: Home;
  level: Scalars['Int'];
  strength: Scalars['Int'];
  dexterity: Scalars['Int'];
  intelligence: Scalars['Int'];
  faith: Scalars['Int'];
  vitality: Scalars['Int'];
  endurance: Scalars['Int'];
  inventory?: Maybe<Array<Item>>;
};

export type CharacterInput = {
  name: Scalars['String'];
  race: Race;
  money: Scalars['Int'];
  isAlive: Scalars['Boolean'];
  faction: Faction;
  current_location_id: Scalars['ID'];
  home_id: Scalars['ID'];
  level: Scalars['Int'];
  strength: Scalars['Int'];
  dexterity: Scalars['Int'];
  intelligence: Scalars['Int'];
  faith: Scalars['Int'];
  vitality: Scalars['Int'];
  endurance: Scalars['Int'];
};

export type Hero = Character & {
  __typename: 'Hero';
  id: Scalars['ID'];
  name: Scalars['String'];
  race: Race;
  money: Scalars['Int'];
  isAlive: Scalars['Boolean'];
  faction: Faction;
  current_location: Location;
  home: Home;
  level: Scalars['Int'];
  strength: Scalars['Int'];
  dexterity: Scalars['Int'];
  intelligence: Scalars['Int'];
  faith: Scalars['Int'];
  vitality: Scalars['Int'];
  endurance: Scalars['Int'];
  inventory?: Maybe<Array<Item>>;
};

export type BlackSmith = Character & {
  __typename: 'BlackSmith';
  id: Scalars['ID'];
  name: Scalars['String'];
  race: Race;
  money: Scalars['Int'];
  isAlive: Scalars['Boolean'];
  faction: Faction;
  current_location: Location;
  home: Home;
  forge: Forge;
  level: Scalars['Int'];
  strength: Scalars['Int'];
  dexterity: Scalars['Int'];
  intelligence: Scalars['Int'];
  faith: Scalars['Int'];
  vitality: Scalars['Int'];
  endurance: Scalars['Int'];
  inventory?: Maybe<Array<Item>>;
};

export type Merchant = Character & {
  __typename: 'Merchant';
  id: Scalars['ID'];
  name: Scalars['String'];
  race: Race;
  money: Scalars['Int'];
  isAlive: Scalars['Boolean'];
  faction: Faction;
  current_location: Location;
  home: Home;
  store: Store;
  level: Scalars['Int'];
  strength: Scalars['Int'];
  dexterity: Scalars['Int'];
  intelligence: Scalars['Int'];
  faith: Scalars['Int'];
  vitality: Scalars['Int'];
  endurance: Scalars['Int'];
  inventory?: Maybe<Array<Item>>;
};

export enum Race {
  Human = 'Human',
  Elf = 'Elf',
  DarkElf = 'DarkElf',
  Dwarf = 'Dwarf',
  Orc = 'Orc',
  Skeleton = 'Skeleton',
  Vampire = 'Vampire',
  Dragonian = 'Dragonian'
}

export enum Faction {
  Light = 'Light',
  Dark = 'Dark',
  Chaos = 'Chaos',
  Balance = 'Balance'
}

export type Item = {
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['Float'];
  owned_by?: Maybe<Character>;
  posessed_by?: Maybe<Character>;
  value: Scalars['Int'];
  trade_history: Array<Trade>;
};

export type Repairable = {
  durability: Scalars['Int'];
  repair_history: Array<Repair>;
};

export type Repair = {
  __typename: 'Repair';
  cost: Transaction;
  blacksmith: BlackSmith;
};

export type Weapon = Item & {
  __typename: 'Weapon';
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['Float'];
  durability: Scalars['Int'];
  owned_by?: Maybe<Character>;
  posessed_by?: Maybe<Character>;
  type: WeaponType;
  stats: WeaponStats;
  requirements: WeaponRequirements;
  value: Scalars['Int'];
  trade_history: Array<Trade>;
  repair_history: Array<Repair>;
};

export enum WeaponType {
  StraightSword = 'StraightSword',
  CurvedSword = 'CurvedSword',
  CurvedGreatSword = 'CurvedGreatSword',
  Hammer = 'Hammer',
  GreatHammer = 'GreatHammer',
  GreatSword = 'GreatSword',
  UltraGreatSword = 'UltraGreatSword',
  Bow = 'Bow',
  Crossbow = 'Crossbow',
  GreatBow = 'GreatBow',
  Shield = 'Shield',
  GreatShield = 'GreatShield',
  Dagger = 'Dagger',
  Staff = 'Staff',
  Talisman = 'Talisman',
  Axe = 'Axe',
  GreatAxe = 'GreatAxe',
  Spear = 'Spear',
  Halberd = 'Halberd',
  Whip = 'Whip',
  Katana = 'Katana'
}

export type WeaponStats = {
  __typename: 'WeaponStats';
  slash_dmg: Scalars['Int'];
  piercing_dmg: Scalars['Int'];
  blunt_dmg: Scalars['Int'];
  fire_dmg: Scalars['Int'];
  dark_dmg: Scalars['Int'];
  divine_dmg: Scalars['Int'];
  lightning_dmg: Scalars['Int'];
  magic_dmg: Scalars['Int'];
};

export type WeaponRequirements = {
  __typename: 'WeaponRequirements';
  strength: Scalars['Int'];
  dexterity: Scalars['Int'];
  intelligence: Scalars['Int'];
  faith: Scalars['Int'];
};

export type Armour = Item & {
  __typename: 'Armour';
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['Float'];
  durability: Scalars['Int'];
  owned_by?: Maybe<Character>;
  posessed_by?: Maybe<Character>;
  class?: Maybe<ArmourClassification>;
  type?: Maybe<ArmourType>;
  stats?: Maybe<ArmourStats>;
  value: Scalars['Int'];
  trade_history: Array<Trade>;
  repair_history: Array<Repair>;
};

export type ArmourStats = {
  __typename: 'ArmourStats';
  slash_res: Scalars['Int'];
  piercing_res: Scalars['Int'];
  blunt_res: Scalars['Int'];
  fire_res: Scalars['Int'];
  dark_res: Scalars['Int'];
  divine_res: Scalars['Int'];
  lightning_res: Scalars['Int'];
  magic_res: Scalars['Int'];
  bleed_res: Scalars['Int'];
  poison_res: Scalars['Int'];
  curse_res: Scalars['Int'];
};

export enum ArmourClassification {
  Light = 'Light',
  Medium = 'Medium',
  Heavy = 'Heavy'
}

export enum ArmourType {
  Helmet = 'Helmet',
  Breastplate = 'Breastplate',
  Gauntlets = 'Gauntlets',
  Greaves = 'Greaves',
  Boots = 'Boots'
}

export type Query = {
  __typename: 'Query';
  getAllCharacters?: Maybe<Array<Character>>;
};

export type Mutation = {
  __typename: 'Mutation';
  insertCharacter: Scalars['ID'];
};


export type MutationInsertCharacterArgs = {
  input: CharacterInput;
};

export type Coordinates = {
  __typename: 'Coordinates';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Location = {
  name: Scalars['String'];
  coordinates: Coordinates;
  people?: Maybe<Array<Character>>;
};

export type Town = Location & {
  __typename: 'Town';
  name: Scalars['String'];
  coordinates: Coordinates;
  people: Array<Character>;
  population?: Maybe<Scalars['Int']>;
  controllingFaction: Faction;
  residents: Array<Character>;
};

export type Cave = Location & {
  __typename: 'Cave';
  name: Scalars['String'];
  coordinates: Coordinates;
  people?: Maybe<Array<Character>>;
};

export type Forest = Location & {
  __typename: 'Forest';
  name: Scalars['String'];
  coordinates: Coordinates;
  people?: Maybe<Array<Character>>;
};

export type Property = {
  id: Scalars['ID'];
  location: Location;
  inventory: Array<Item>;
  owners?: Maybe<Array<Character>>;
  occupants?: Maybe<Array<Character>>;
};

export type Home = Property & {
  __typename: 'Home';
  id: Scalars['ID'];
  location: Location;
  inventory: Array<Item>;
  owners?: Maybe<Array<Character>>;
  occupants?: Maybe<Array<Character>>;
};

export type Forge = Property & {
  __typename: 'Forge';
  id: Scalars['ID'];
  location: Location;
  inventory: Array<Item>;
  owners?: Maybe<Array<Character>>;
  occupants?: Maybe<Array<Character>>;
};

export type Store = Property & {
  __typename: 'Store';
  id: Scalars['ID'];
  location: Location;
  inventory: Array<Item>;
  owners?: Maybe<Array<Character>>;
  occupants?: Maybe<Array<Character>>;
};

export type Money = {
  __typename: 'Money';
  value: Scalars['Int'];
};

export type Transaction = Money | Weapon;

export type Trade = {
  __typename: 'Trade';
  cost: Transaction;
  buyer: Character;
  seller: Character;
};

export type GetAllWeaponsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWeaponsQuery = (
  { __typename: 'Query' }
  & { getAllCharacters?: Maybe<Array<(
    { __typename: 'Hero' }
    & Pick<Hero, 'name'>
  ) | (
    { __typename: 'BlackSmith' }
    & Pick<BlackSmith, 'name'>
  ) | (
    { __typename: 'Merchant' }
    & Pick<Merchant, 'name'>
  )>> }
);
