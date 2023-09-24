import Select from "@/components/Select";
import { useState } from "react";

describe("Select", () => {
  const options = ["Option A", "Option B", "Option C"];
  const placeholder = "Select an option";
  const title = "Title";

  it("Renders", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });

      return (
        <Select
          options={options}
          user={user}
          field="name"
          setUser={setUser}
          placeholder={placeholder}
          title={title}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="toggle"]').should("exist");
    cy.get('[data-cy="menu"]').should("not.exist");
  });

  it("Show Dropdown", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });

      return (
        <Select
          options={options}
          user={user}
          field={"name"}
          setUser={setUser}
          placeholder={placeholder}
          title={title}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="toggle"]').click();
    cy.get('[data-cy="menu"]').should("be.visible");
  });
});
