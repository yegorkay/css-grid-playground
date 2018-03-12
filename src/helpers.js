export const cssCase = str =>
    str
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase();
