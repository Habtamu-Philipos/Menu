import MenuItem from './MenuItem'

function Menu({ menuItems }) {
  return (
    <div className="section-center">
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </div>
  )
}

export default Menu
