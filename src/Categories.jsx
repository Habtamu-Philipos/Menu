function Categories({ categories, handleCategory }) {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          type="button"
          className="btn"
          key={category}
          onClick={() => handleCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories
