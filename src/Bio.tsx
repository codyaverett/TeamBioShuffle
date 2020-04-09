import * as React from 'react';
import { CSSProperties } from 'react';
import { Bio as BioType } from './types';

type Props = BioType;

const s: { [container: string]: CSSProperties } = {
  root: {
    fontFamily: 'helvetica',
    boxSizing: 'border-box',
    minWidth: '400px'
  },
  picture: {
    backgroundColor: 'grey',
    float: 'left',
    clipPath: 'circle(48% at center)',
    shapeOutside: 'circle(50%)',
    objectFit: 'cover',
    height: 150,
    width: 150
  },
  name: { fontSize: '1.2em', margin: '.5em' },
  subHeading: {},
  content: { padding: '.5em' }
};

export function Bio(props: Props) {
  return (
    <article style={s.root}>
      <img src={props.imageUrl} style={s.picture} alt={props.name} />
      <div style={s.content}>
        <h3 style={s.name}>{props.name}</h3>
        <div>{props.email}</div>
        <time dateTime={props.birthday}>{props.birthday}</time>
        <div>{props.personality}</div>
      </div>
    </article>
  );
}
