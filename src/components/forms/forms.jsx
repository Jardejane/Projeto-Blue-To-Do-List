import './forms.css';
export default function Formsdados({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) {
  return (
    <section className="FormDadosController">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </section>
  );
}
