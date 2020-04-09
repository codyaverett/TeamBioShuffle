import { Bio, Trait } from './types';

export const TeamBios: Array<Bio> = [
  {
    name: 'Ty Tycoon',
    username: 'tycoon',
    email: 'ty@gmail.com',
    birthday: '6-5',
    personality: 'ENTJ',
    imageUrl: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a'
  },
  {
    name: 'Cody Averett',
    username: 'caavere',
    email: 'codyaverett@gmail.com',
    birthday: '6-2',
    personality: 'INFP-T',
    imageUrl: 'https://images.unsplash.com/photo-1567035861420-2126e2624dd7'
  },
  {
    name: 'Daaammn Daniel',
    username: 'gotkicks',
    email: 'donotmesswithme@gmail.com',
    birthday: '11-17',
    personality: 'ISTP-T',
    imageUrl: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4'
  },
  {
    name: 'Elli Shazam!',
    username: 'elli',
    email: 'ElliDontPlay@gmail.com',
    birthday: '5-16',
    personality: 'INFJ-A',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7'
  },
  {
    name: 'Jeffy Kang',
    username: 'j',
    email: 'Jeffrey.Kang@gmail.com',
    birthday: '4-23',
    personality: 'ENTJ-T',
    imageUrl: 'https://images.unsplash.com/photo-1464314952673-a5bab0556ff2'
  }
];

export const TraitMap: {
  [key: string]: Trait;
} = {
  I: {
    name: 'introverted',
    description:
      'Introverted individuals prefer solitary activities and get exhausted by social interaction.  They tend to be quite sensitive to external stimulation (e.g. sound, sight or smell) in general.'
  },
  E: {
    name: 'extraverted',
    description:
      'Extraverted individuals prefer group activities and get energized by social interaction. They tend to be more enthusiastic and more easily excited than Introverts.'
  },
  S: {
    name: 'observant',
    description:
      'Observant individuals are highly practical, pragmatic and down-to-earth. They tend to have strong habits and focus on what is happening or has already happened.'
  },
  N: {
    name: 'intuitive',
    description:
      'Intuitive individuals are very imaginative, open-minded and curious. They prefer novelty over stability and focus on hidden meanings and future possibilities.'
  },
  F: {
    name: 'feeling',
    description:
      'Feeling individuals are sensitive and emotionally expressive. They are more empathic and less competitive than Thinking types, and focus on social harmony and cooperation.'
  },
  T: {
    name: 'thinking',
    description:
      'Thinking individuals focus on objectivity and rationality, prioritizing logic over emotions. They tend to hide their feelings and see efficiency as more important than cooperation.'
  },
  P: {
    name: 'prospecting',
    description:
      'Prospecting individuals are very good at improvising and spotting opportunities. They tend to be flexible, relaxed nonconformists who prefer keeping their options open.'
  },
  J: {
    name: 'judging',
    description:
      'Judging individuals are decisive, thorough and highly organized. They value clarity, predictability and closure, preferring structure and planning to spontaneity.'
  },
  '-T': {
    name: 'turbulent',
    description:
      'Turbulent (-T) individuals are self-conscious and sensitive to stress. They are likely to experience a wide range of emotions and to be success-driven, perfectionistic and eager to improve.'
  },
  '-A': {
    name: 'assertive',
    description:
      'Assertive (-A) individuals are self-assured, even-tempered and resistant to stress. They refuse to worry too much and do not push themselves too hard when it comes to achieving goals.'
  }
};
