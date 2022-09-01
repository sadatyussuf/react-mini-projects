import { useState } from 'react'

import Category from './components/Category'
import Menu from './components/Menu'
import data from './utilis/data'

const allCategory = ['all', ...new Set(data.map((data) => {
  return data.category
}))]


function App() {
  const [menu, setMenu] = useState(data)
  const [category, setCategory] = useState(allCategory)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(data)
      return;
    }
    const newData = data.filter(item => category === item.category)
    setMenu(newData)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category category={category} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
