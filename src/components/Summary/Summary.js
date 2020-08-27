import "../../scss/_generic.scss";
import "./_summary.scss";
import React from "react";
import map from "../../images/boisko.jpg";
import tr1 from "../../images/tr1.png";
import tr2 from "../../images/tr2.png";
import tr3 from "../../images/tr3.png";
import tr4 from "../../images/tr4.png";
import tr5 from "../../images/tr5.png";

export const Summary = (props) => {
  const {
    roles,
    factors,
    factorsNames,
    friendsNames,
    moviesLinks,
    descriptions,
  } = props;
  const sortedRoles = [...roles];
  sortedRoles.sort((a, b) => {
    return b.average - a.average;
  });

  return (
    <>
      <section className="summary">
        <article className="summary__summary">
          <h2>Podsmowanie</h2>
          <ul>
            {sortedRoles.map((element, index) => {
              return (
                <li key={index}>
                  <span>{index + 1}. </span>
                  <span>Rola: </span>
                  {sortedRoles[index].name} <span>Średnia: </span>
                  {sortedRoles[index].average.toFixed(2)}
                </li>
              );
            })}
          </ul>
        </article>
        <article className="summary__map">
          <h2>Trener radzi</h2>
          <div>
            <div className="summary__main-map">
              <div className="summary__primary-position">
                <h4>{sortedRoles[0].name}</h4>
              </div>
              <div className="summary__secondary-position">
                <h4>{sortedRoles[1].name}</h4>
              </div>
              <img src={map} alt="Boisko" />
            </div>
          </div>
        </article>
        <article className="summary__description">
          <h2>
            Trener tłumaczy: Graj w ten sposób jako: {sortedRoles[0].name}
          </h2>
          <div className="summary__content">
            <img src={tr2} alt="Trener" />
            <p className="summary__text">{descriptions[sortedRoles[0].id]}</p>
          </div>
        </article>
        <article className="summary__core">
          <h2>Trener krzyczy "Ćwicz te umijętności, są kluczowe!"</h2>
          <div>
            {factors[sortedRoles[0].id].map((element, index) => {
              if (element === 2)
                return <p key={index}>{factorsNames[index]}</p>;
            })}
          </div>
          <img src={tr3} alt="Trener" />
        </article>
        <article className="summary__friends">
          <h2>Dobrze gdybyś grał z nimi</h2>
          <h3>{friendsNames[sortedRoles[0].id]}</h3>
          <img src={tr5} alt="Trener" />
        </article>
        <section className="summary__before-movie">
          <h2>Bądź jak oni...</h2>
          <img src={tr4} alt="Trener" />
        </section>
        <section className="summary__movie">
          <div className="summary__center">
            <iframe
              src={moviesLinks[sortedRoles[0].id]}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </section>
    </>
  );
};
