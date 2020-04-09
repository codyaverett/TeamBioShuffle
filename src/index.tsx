import * as React from 'react';
import { render } from 'react-dom';
import { AnimatedList } from './AnimatedList';
import { TeamBios } from './data';
import { Bio } from './Bio';
import { shuffle } from 'lodash';

import './styles.css';

const App = () => {
  // This shuffle is here to just simulate the data being reordered
  // We still need some controls to help us sort and map the bios
  const [shuffledBios, setShuffledBios] = React.useState(TeamBios);

  // Runs every second to shuffle the Bios records
  React.useEffect(function onEverySecond() {
    const clock = setInterval(function intervalHandler() {
      setShuffledBios(shuffle(shuffledBios));
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  });

  return (
    // Render Prop Example
    // <AnimatedList
    //   items={shuffledBios}
    //   watchKey="name"
    //   render={(items) => <Bio {...items} />}
    // />

    // Function as child render prop example
    <AnimatedList items={shuffledBios} watchKey="name">
      {(item) => <Bio {...item} />}
    </AnimatedList>
  );
};

render(<App />, document.getElementById('root'));
