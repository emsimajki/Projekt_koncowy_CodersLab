import "../../scss/_generic.scss";
import "./_homepage.scss";
import React, { useState } from "react";
import { Summary } from "../Summary/Summary";

export const Homepage = (props) => {
  const {
    factors,
    names,
    factorsNames,
    friendsNames,
    moviesLinks,
    descriptions,
  } = props;
  const [surveyLoaded, setSurveyLoaded] = useState(false);
  const [roles, setRoles] = useState([]);
  const data = [];

  const handleForm = (e) => {
    e.preventDefault();

    // Zczytywanie danych z ankiet
    for (let i = 0; i < 36; i++) {
      data.push(+e.target[`st${i}`].value);
    }

    const tempRoles = [];
    // Dla każdej roli
    for (let i = 0; i < 21; i++) {
      let sum = 0;
      let counter = 0;
      // Dla każdego atrubutu
      for (let j = 0; j < 36; j++) {
        if (factors[i][j] === 2) {
          counter += 2;
          sum += 2 * data[j];
        } else if (factors[i][j] === 1) {
          counter += 1;
          sum += data[j];
        }
      }
      if (counter !== 0)
        tempRoles.push({
          id: i,
          name: names[i],
          average: sum / counter,
        });
      else tempRoles.push({ id: i, name: names[i], average: 0 });
    }

    setRoles(tempRoles);
    setSurveyLoaded(true);
  };

  return (
    <>
      <section className="homepage">
        <article className="homepage__title">
          <h1>Program określający predyspozcje piłkarskie</h1>
        </article>
        <article className="homepage__survey">
          <h2>Ankieta</h2>
          <form className="homepage__form" onSubmit={handleForm}>
            <div className="homepage__technical">
              <label>
                Długie wrzuty:
                <input type="number" name="st0" min={0} max={10} />
              </label>
              <label>
                Dośrodkowanie:
                <input type="number" name="st1" min={0} max={10} />
              </label>
              <label>
                Drybling:
                <input type="number" name="st2" min={0} max={10} />
              </label>
              <label>
                Gra głową:
                <input type="number" name="st3" min={0} max={10} />
              </label>
              <label>
                Krycie:
                <input type="number" name="st4" min={0} max={10} />
              </label>
              <label>
                Odbiór piłki:
                <input type="number" name="st5" min={0} max={10} />
              </label>
              <label>
                Podanie:
                <input type="number" name="st6" min={0} max={10} />
              </label>
              <label>
                Przyjęcie piłki:
                <input type="number" name="st7" min={0} max={10} />
              </label>
              <label>
                Rzuty karne:
                <input type="number" name="st8" min={0} max={10} />
              </label>
              <label>
                Rzuty rożne:
                <input type="number" name="st9" min={0} max={10} />
              </label>
              <label>
                Rzuty wolne:
                <input type="number" name="st10" min={0} max={10} />
              </label>
              <label>
                Strzały z dystansu:
                <input type="number" name="st11" min={0} max={10} />
              </label>
              <label>
                Technika:
                <input type="number" name="st12" min={0} max={10} />
              </label>
              <label>
                Wykańczanie akcji:
                <input type="number" name="st13" min={0} max={10} />
              </label>
            </div>
            <div className="homepage__mental">
              <label>
                Agresja:
                <input type="number" name="st14" min={0} max={10} />
              </label>
              <label>
                Błyskotliwość:
                <input type="number" name="st15" min={0} max={10} />
              </label>
              <label>
                Decyzje:
                <input type="number" name="st16" min={0} max={10} />
              </label>
              <label>
                Determinacja:
                <input type="number" name="st17" min={0} max={10} />
              </label>
              <label>
                Gra bez piłki:
                <input type="number" name="st18" min={0} max={10} />
              </label>
              <label>
                Koncentracja:
                <input type="number" name="st19" min={0} max={10} />
              </label>
              <label>
                Opanowanie:
                <input type="number" name="st20" min={0} max={10} />
              </label>
              <label>
                Prcowitość:
                <input type="number" name="st21" min={0} max={10} />
              </label>
              <label>
                Przegląd sytuacji:
                <input type="number" name="st22" min={0} max={10} />
              </label>
              <label>
                Przewidywanie:
                <input type="number" name="st23" min={0} max={10} />
              </label>
              <label>
                Przywództwo:
                <input type="number" name="st24" min={0} max={10} />
              </label>
              <label>
                Ustawianie się:
                <input type="number" name="st25" min={0} max={10} />
              </label>
              <label>
                Waleczność:
                <input type="number" name="st26" min={0} max={10} />
              </label>
              <label>
                Współpraca:
                <input type="number" name="st27" min={0} max={10} />
              </label>
            </div>
            <div className="homepage__physical">
              <label>
                Przyspieszenie:
                <input type="number" name="st28" min={0} max={10} />
              </label>
              <label>
                Równowaga:
                <input type="number" name="st29" min={0} max={10} />
              </label>
              <label>
                Siła:
                <input type="number" name="st30" min={0} max={10} />
              </label>
              <label>
                Skoczność:
                <input type="number" name="st31" min={0} max={10} />
              </label>
              <label>
                Sprawność:
                <input type="number" name="st32" min={0} max={10} />
              </label>
              <label>
                Szybkość:
                <input type="number" name="st33" min={0} max={10} />
              </label>
              <label>
                Wytrzymałość:
                <input type="number" name="st34" min={0} max={10} />
              </label>
              <label>
                Zwinność:
                <input type="number" name="st35" min={0} max={10} />
              </label>
              <input
                className="homepage__submit"
                type="submit"
                value="Przeanalizuj"
              />
            </div>
          </form>
        </article>
        <article className="homepage__summary">
          {surveyLoaded && (
            <Summary
              roles={roles}
              factors={factors}
              factorsNames={factorsNames}
              friendsNames={friendsNames}
              moviesLinks={moviesLinks}
              descriptions={descriptions}
            />
          )}
        </article>
      </section>
    </>
  );
};
