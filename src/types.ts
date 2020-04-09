/**
 * A bio entry of a single human team member
 */
export type Bio = {
  name: string;
  username: string;
  email: string;
  birthday: string;
  personality: string;
  imageUrl?: string;
};

/**
 * A single personality trait that we combine to
 * calculate a personality group
 */
export type Trait = {
  name: string;
  description: string;
  link?: string;
  active?: boolean;
};

/**
 * A generalized group in which a person is placed
 * based on the 4 charater traits they exemplify
 */
export type PersonalityGroup = {
  name: string;
  description: string;
  link?: string;
};
