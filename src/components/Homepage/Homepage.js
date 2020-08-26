import "../../scss/_generic.scss";
import "./_homepage.scss";
import React from "react";

export const Homepage = (props) => {
  return (
    <>
      <section className="homepage">
        <article className="homepage__title">
          <h1>Program określający predyspozcje piłkarskie</h1>
        </article>
        <article className="homepage__survey">
          <h2>Ankieta</h2>
          <form className="homepage__form">
            <label>
              Imię:
              <input type="number" min={0} max={10} name="name" />
            </label>
            <input type="submit" value="Wyślij" />
          </form>
        </article>
      </section>
    </>
  );
};
