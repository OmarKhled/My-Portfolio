import COLORS from "@constants/colors";

let colorVariables = "";

for (const property in COLORS) {
  if (COLORS[property] instanceof Object) {
    for (const shade in COLORS[property] as Object) {
      if (shade === "default") {
        colorVariables += `--${property}: ${Object(COLORS[property])[shade]};`;
      } else {
        colorVariables += `--${property}-${shade}: ${
          Object(COLORS[property])[shade]
        };`;
      }
    }
  } else {
    colorVariables += `--${property}: ${COLORS[property]};`;
  }
  colorVariables += "\n";
}

export { colorVariables };
