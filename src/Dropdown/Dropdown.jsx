//We below 3 options for dropdown: Option1: 
// ✅ Using react-select
//=> Searchable ,Easily styled ,Supports multiselect, async, etc.


import React from "react";
import Select from "react-select";

const ReactSelectDropdown = () => {
  const options = [
    { value: "apple", label: "Apple 🍎" },
  { value: "banana", label: "Banana 🍌" },
  { value: "cherry", label: "Cherry 🍒" },
  { value: "mango", label: "Mango 🥭" },
  { value: "grapes", label: "Grapes 🍇" },
  { value: "orange", label: "Orange 🍊" },
  { value: "pineapple", label: "Pineapple 🍍" },
  { value: "strawberry", label: "Strawberry 🍓" },
  { value: "blueberry", label: "Blueberry 🫐" },
  { value: "watermelon", label: "Watermelon 🍉" },
  { value: "peach", label: "Peach 🍑" },
  { value: "lemon", label: "Lemon 🍋" },
  { value: "kiwi", label: "Kiwi 🥝" },
  ];

  const handleChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  return (
    <div style={{ width: "250px" }}>
      <Select options={options} onChange={handleChange} placeholder="Select a fruit" />
    </div>
  );
};


export  default ReactSelectDropdown;
{/*

2. ✅ Native <select> Dropdown
📌 Features:
=>Simple , Browser-native ,Limited styling and no search.

✅ Code:
import React, { useState } from "react";

const NativeSelect = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <label htmlFor="fruit">Choose a fruit:</label>
      <select
        id="fruit"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{ padding: "8px", margin: "10px", width: "200px" }}
      >
        <option value="">-- Select --</option>
        <option value="Apple">Apple 🍎</option>
        <option value="Banana">Banana 🍌</option>
        <option value="Cherry">Cherry 🍒</option>
      </select>
      {selected && <p>You selected: {selected}</p>}
    </div>
  );
};
export default NativeSelect;


export default ReactSelectDropdown;
3. ✅ Custom <ul><li> Dropdown with Search
=>Full control ,Search manually implemented ,Needs custom accessibility.

✅ Code:

import React, { useState } from "react";

const CustomDropdown = () => {
  const allOptions = [
    "Apple 🍎", "Banana 🍌", "Cherry 🍒", "Mango 🥭", "Grapes 🍇",
    "Orange 🍊", "Pineapple 🍍", "Strawberry 🍓", "Blueberry 🫐"
  ];

  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = allOptions.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    wrapper: { width: "250px", position: "relative", fontFamily: "sans-serif" },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      maxHeight: "150px",
      overflowY: "auto",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff",
      zIndex: 999,
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
    option: { padding: "10px", cursor: "pointer" },
  };

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Search fruits"
        value={search}
        onFocus={() => setIsOpen(true)}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px"
        }}
      />
      {isOpen && (
        <ul style={styles.dropdown}>
          {filteredOptions.map((option, idx) => (
            <li
              key={idx}
              style={styles.option}
              onClick={() => {
                setSelected(option);
                setSearch(option);
                setIsOpen(false);
              }}
              onMouseEnter={(e) => (e.target.style.background = "#eee")}
              onMouseLeave={(e) => (e.target.style.background = "#fff")}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {selected && <p style={{ marginTop: "10px" }}>You selected: {selected}</p>}
    </div>
  );
};

export default CustomDropdown;

  */}












