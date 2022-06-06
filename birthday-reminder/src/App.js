
import { useState } from 'react'

import Profile from './components/Profile.js';
import profile from './utilis/data.js';

function App() {
  const [people, Setpeople] = useState(profile)
  return (
    <main>
      <section className='container'>

        <h3>{people.length} birthdays today</h3>

        <Profile people={people} />

        <button onClick={() => Setpeople([])}>clear all</button>

      </section>
    </main>
  );
}

export default App;
