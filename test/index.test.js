const { getName, getMatricula, getDescription } = require("../assets/info");

test("Se debe btener nombre del estudiante", () => {
   expect(getName()).toBe("CRISTIAN EULISES SANCHEZ RAMIREZ");
});

test("Se debe de obtener la descripción del estudiante", () => {
   const message = "Mi nombre es Cristian, tengo 20 años de edad. Nací en Andrés, Boca Chica un 25 de Julio del 2002. Me he destacado en mi municipio por mi liderazgo, empoderamiento, trabajo social y voluntariado.";
   expect(getDescription()).toBe(message);
});

test("Se debe de obtener la matrícula del estudiante", () => {
   expect(getMatricula()).toBe("2021-1899");
});
