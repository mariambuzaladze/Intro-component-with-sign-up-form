import "./input.css";

export default function Input({ placeholder, id, value, onChange }) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      valuue={value}
      onChange={onChange}
    />
  );
}
