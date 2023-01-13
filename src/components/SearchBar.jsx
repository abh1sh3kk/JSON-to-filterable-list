export default function SearchBar({
  showStocked,
  handleCheck,
  filterSearch,
  handleSearchChange,
}) {
  return (
    <div style={{ width: "100%" }} className="padding-1">

      <input
        placeholder="Search..."
        style={{
          width: "100%",
          height: "2rem",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
        value={filterSearch}
        onChange={handleSearchChange}
      />


      <br />


      <label className="label userSelectionNone">
        <input
          type="checkbox"
          id="checkbox"
          value={showStocked}
          onChange={handleCheck}
        />
        Only Show Products in Stock
      </label>

      
      <br />
    </div>
  );
}
