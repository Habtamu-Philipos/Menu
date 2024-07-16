import { useState } from 'react'
import data from './data'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'
const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const uniqueCategories = [
    'all',
    ...new Set(menuItems.map((item) => item.category)),
  ]

  const [categories, setCategories] = useState(uniqueCategories)

  function handleCategory(category) {
    if (category === 'all') {
      setMenuItems(data)
      return
    }
    const filteredCategory = data.filter((item) => item.category === category)

    setMenuItems(filteredCategory)
  }
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} handleCategory={handleCategory} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}
export default App
