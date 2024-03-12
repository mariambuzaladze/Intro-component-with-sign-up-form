import "./input.css";

export default function Input({ placeholder, id, onChange }) {
  return (
    <input id={id} type="text" placeholder={placeholder} onChange={onChange} />
  );
}
