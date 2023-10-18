import React from "react";
import "../styles/Content.module.css"; // Import the CSS file
import { Container } from "react-bootstrap";

const Content = () => {
  return (
    <Container>
      <div className="content">
        <section className="section">
          <h2>Adolf Hitler: A Historical Overview</h2>
          <p>
            Adolf Hitler (1889-1945) was a German politician and leader of the
            Nazi Party. He rose to power as Chancellor of Germany in 1933 and
            later Führer in 1934. Hitler initiated World War II in Europe and
            was a central figure in the Holocaust, a systematic genocide in
            which approximately six million Jews, along with millions of other
            people, were exterminated by the Nazi regime.
          </p>
          {/* Add more content and sections as needed */}
        </section>
      </div>
    </Container>
  );
};

export default Content;
