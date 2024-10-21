import Loading from "../../src/components/Loading";

describe("Loading", () => {
  it("Loading", () => {
    cy.mount(<Loading />);

    cy.contains("Loading...")
      .should("exist")
      .and("have.class", "text-3xl", "font-bold", "text-cutie-purple-100");

    cy.get(".animate-spin")
      .should("exist")
      .and("have.class", "text-cutie-purple-100");
  });
});
