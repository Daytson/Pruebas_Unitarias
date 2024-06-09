const app = require("../app");

test("debería saludar con '¡Hola mundo!'", () => {
  expect(app.saludar).toEqual("¡Hola mundo!");
});
