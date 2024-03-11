import "./input.css";

export default function Input({ placeholder, id, onChange, text, className }) {
  return (
    <div className="input">
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />

      <p className={className}>{text}</p>
    </div>
  );
}
