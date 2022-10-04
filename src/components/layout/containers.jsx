import css from './container.css';

export function Container(props) {
  return (
    <section className={`${css.Container} ${props.customClass}`}>
      {props.children}
    </section>
  );
}
