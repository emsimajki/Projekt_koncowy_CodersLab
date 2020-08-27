import "../../scss/_generic.scss";
import "./_summary.scss";
import React from "react";

export const Summary = (props) => {
  const { roles } = props;
  console.log(props);
  console.log(roles);
  return (
    <>
      <section className="summary">
        <article className="summary__summary">
          <h2>Podsmowanie</h2>
          <ul>
            {roles.map((element, index) => {
              return (
                <li key={index}>
                  Rola: {roles[index].name} Średnia {roles[index].average}
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </>
  );
};
