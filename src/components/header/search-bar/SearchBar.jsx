const SearchBar = () => {
  return (
    <div className="header__search">
      <label className="header__search-field" htmlFor="">
        <input
          className="header__search-input"
          type="search"
          placeholder="Search"
        />
        <button className="header__search-button">Search</button>
      </label>
    </div>
  );
};

export default SearchBar;
