const Search = () => {
    return (
        <header>
            <h2 className="header__title">Search to Trade.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Search properties by addres or zipcode"
            />
        </header>
    );
}

export default Search;