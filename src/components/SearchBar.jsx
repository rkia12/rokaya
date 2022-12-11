function SearchBar({ value, setValue }) {
  return (
    <div>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
