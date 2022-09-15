/* eslint no-undef: 0 */

describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000", {
      timeout: 180000,
    });
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("can go from main page to pokemon page", function () {
    cy.visit("http://localhost:5000", {
      timeout: 180000,
    });
    cy.contains("ivysaur").click();
    cy.contains("chlorophyll");
  });
});
