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
            <div className="homepage__technical">
              <label>
                Długie wrzuty:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Dośrodkowanie:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Drybling:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Gra głową:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Krycie:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Odbiór piłki:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Podanie:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Przyjęcie piłki:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Rzuty karne:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Rzuty rożne:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Rzuty wolne:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Strzały z dystansu:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Technika:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Wykańczanie akcji:
                <input type="number" min={0} max={10} />
              </label>
            </div>
            <div className="homepage__mental">
              <label>
                Agresja:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Błyskotliwość:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Decyzje:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Determinacja:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Gra bez piłki:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Koncentracja:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Opanowanie:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Prcowitość:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Przegląd sytuacji:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Przewidywanie:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Przywództwo:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Ustawianie się:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Waleczność:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Współpraca:
                <input type="number" min={0} max={10} />
              </label>
            </div>
            <div className="homepage__physical">
              <label>
                Przyspieszenie:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Równowaga:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Siła:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Skoczność:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Sprawność:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Szybkość:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Wytrzymałość:
                <input type="number" min={0} max={10} />
              </label>
              <label>
                Zwinność:
                <input type="number" min={0} max={10} />
              </label>
              <input
                className="homepage__submit"
                type="submit"
                value="Przeanalizuj"
              />
            </div>
          </form>
        </article>
      </section>
    </>
  );
};
