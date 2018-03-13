import React from 'react';
import { render } from 'react-dom';

import LearnMode from './LearnMode';

const TERMS = [
  {
    id: 1,
    word: 'Nebraska',
    definition: 'Lincoln',
  },
  {
    id: 2,
    word: 'Massachusetts',
    definition: 'Boston',
  },
  {
    id: 3,
    word: 'California',
    definition: 'Sacramento',
  },
];

render(
  <LearnMode terms={TERMS} />,
  document.querySelector('#root')
);
