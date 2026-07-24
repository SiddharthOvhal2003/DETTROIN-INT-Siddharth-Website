import Container from "./Container";

function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export default Section;