import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  padding: 0.5rem;
  height: 2.5rem;
  outline: none;
  border: none;
`;

export default function SearchBar({
  showStocked,
  handleCheck,
  filterSearch,
  handleSearchChange,
}) {
  return (
    <div style={{ width: "100%" }} className="padding-1">
      <Input
        placeholder="Search..."
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
