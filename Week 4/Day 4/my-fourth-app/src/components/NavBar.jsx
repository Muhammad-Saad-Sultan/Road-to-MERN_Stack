const NavBar = ({products, setFilter, sort, setSort}) => {
    const categories = products.map((product) => product.category);
    const uniqueCategories = categories.filter((category, index) => categories.indexOf(category) === index);

    return (
        <div>
            <header>
                <nav>
                    <button onClick={() => {setFilter('')}}>All Items</button>
                    {uniqueCategories.map((category) => (
                        <button key={category} onClick={() => {setFilter(category)}}>{category}</button>
                    ))}
                    <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="default">Select</option>
                        <option value="ascending">Low to High</option>
                        <option value="descending">High to Low</option>
                    </select>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;
