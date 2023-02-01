/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Address = {
  __typename?: 'Address';
  address: Scalars['String'];
  agencyProfile?: Maybe<AgencyProfile>;
  agencyProfileId?: Maybe<Scalars['Int']>;
  apartment?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  state: Scalars['String'];
  userProfile?: Maybe<UserProfile>;
  userProfileId?: Maybe<Scalars['Int']>;
  zip: Scalars['Int'];
};

export type Agency = {
  __typename?: 'Agency';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  pets: Array<Maybe<Pet>>;
  profile?: Maybe<AgencyProfile>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  volunteers: Array<Maybe<User>>;
};

export type AgencyBase = {
  __typename?: 'AgencyBase';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type AgencyProfile = {
  __typename?: 'AgencyProfile';
  addresses: Array<Maybe<Address>>;
  agency: Agency;
  agencyId: Scalars['Int'];
  bio?: Maybe<Scalars['String']>;
  contacts: Array<Maybe<Contact>>;
  id: Scalars['ID'];
};

export type Breed = {
  __typename?: 'Breed';
  breed: Scalars['String'];
  id: Scalars['ID'];
  pets?: Maybe<Array<Maybe<BreedsToPets>>>;
  species: Species;
};

export type BreedToPet = {
  breedId: Scalars['Int'];
  petId: Scalars['Int'];
};

export type BreedsToPets = {
  __typename?: 'BreedsToPets';
  breed: Breed;
  breedId: Scalars['Int'];
  pet: Pet;
  petId: Scalars['Int'];
};

export enum Coat {
  Long = 'LONG',
  Medium = 'MEDIUM',
  None = 'NONE',
  Short = 'SHORT',
  Unknown = 'UNKNOWN'
}

export enum Color {
  Black = 'BLACK',
  Brindle = 'BRINDLE',
  Brown = 'BROWN',
  Golden = 'GOLDEN',
  Unknown = 'UNKNOWN',
  White = 'WHITE'
}

export type Contact = {
  __typename?: 'Contact';
  agencyProfile?: Maybe<AgencyProfile>;
  agencyProfileId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  userProfile?: Maybe<UserProfile>;
  volunteerProfileId?: Maybe<Scalars['Int']>;
};

export type CreateOrUpdateAgency = {
  bio?: InputMaybe<Scalars['String']>;
};

export type CreatePet = {
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Species>;
};

export enum Diet {
  Medical = 'MEDICAL',
  Standard = 'STANDARD',
  Weight = 'WEIGHT'
}

export enum GoodWith {
  All = 'ALL',
  Cats = 'CATS',
  CatsAndDogs = 'CATS_AND_DOGS',
  Children = 'CHILDREN',
  Dogs = 'DOGS',
  Unknown = 'UNKNOWN'
}

export type Image = {
  __typename?: 'Image';
  file?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pets?: Maybe<Array<Maybe<ImagesToPetProfiles>>>;
  thumbnail?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagesToPetProfiles = {
  __typename?: 'ImagesToPetProfiles';
  image: Image;
  imageId: Scalars['Int'];
  petProfile: PetProfile;
  petProfileId: Scalars['Int'];
};

export type LoginAgency = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBreedToPet: Pet;
  createOrUpdateAgencyProfile: AgencyProfile;
  createPet: Pet;
  loginAgency: Agency;
  registerAgency: Agency;
};


export type MutationAddBreedToPetArgs = {
  input: BreedToPet;
};


export type MutationCreateOrUpdateAgencyProfileArgs = {
  input: CreateOrUpdateAgency;
};


export type MutationCreatePetArgs = {
  input: CreatePet;
};


export type MutationLoginAgencyArgs = {
  input: LoginAgency;
};


export type MutationRegisterAgencyArgs = {
  input: RegisterAgency;
};

export enum Personality {
  Active = 'ACTIVE',
  Curious = 'CURIOUS',
  Goofy = 'GOOFY',
  Hyper = 'HYPER',
  Lazy = 'LAZY',
  Loner = 'LONER',
  Unknown = 'UNKNOWN'
}

export type Pet = {
  __typename?: 'Pet';
  agency: Agency;
  agencyId: Scalars['Int'];
  breed?: Maybe<Array<Maybe<BreedsToPets>>>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  profile?: Maybe<PetProfile>;
  savedBy?: Maybe<Array<Maybe<UsersToPets>>>;
  species: Species;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PetProfile = {
  __typename?: 'PetProfile';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  coat?: Maybe<Coat>;
  color?: Maybe<Color>;
  diet?: Maybe<Diet>;
  goodWith?: Maybe<GoodWith>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<ImagesToPetProfiles>>>;
  isAvailable: Scalars['Boolean'];
  isFixed?: Maybe<Scalars['Boolean']>;
  isHouseTrained?: Maybe<Scalars['Boolean']>;
  isVaccineCurent?: Maybe<Scalars['Boolean']>;
  personality?: Maybe<Personality>;
  pet: Pet;
  petId: Scalars['Int'];
  sex?: Maybe<Sex>;
  weight?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  agencies: Array<Maybe<Agency>>;
  agencyById: AgencyBase;
  agencyByIdWithData: Agency;
  breeds: Array<Breed>;
  catBreeds: Array<Breed>;
  dogBreeds: Array<Breed>;
  horseBreeds: Array<Breed>;
  petById: Pet;
  pets: Array<Maybe<Pet>>;
  petsByAgency: Array<Maybe<Pet>>;
};


export type QueryPetByIdArgs = {
  id: Scalars['ID'];
};

export type RegisterAgency = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN'
}

export enum Species {
  Barnyard = 'BARNYARD',
  Bird = 'BIRD',
  Cat = 'CAT',
  Dog = 'DOG',
  Fish = 'FISH',
  Horse = 'HORSE',
  Reptile = 'REPTILE'
}

export type User = {
  __typename?: 'User';
  agency?: Maybe<Agency>;
  agencyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  profile?: Maybe<UserProfile>;
  role: UserRole;
  savedPets: Array<Maybe<UsersToPets>>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  address?: Maybe<Address>;
  bio?: Maybe<Scalars['String']>;
  contact?: Maybe<Contact>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
};

export enum UserRole {
  Adopter = 'ADOPTER',
  Volunteer = 'VOLUNTEER'
}

export type UsersToPets = {
  __typename?: 'UsersToPets';
  pet: Pet;
  petId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};
