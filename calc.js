const container = document.createElement("div");
container.classList.add("container");
const display = document.createElement("input");
display.classList.add("display");
display.type = "text";
display.readOnly = true;

container.appendChild(display);
document.body.appendChild(container);

const btn = document.createElement("div");
btn.classList.add("btn");
container.appendChild(btn);

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
  "C",
];

buttons.forEach((txt) => {
  const too = document.createElement("button");
  too.textContent = txt;
  too.classList.add("too");
  btn.appendChild(too);

  too.onclick = () => {
    if (txt === "C") display.value = "";
    else if (txt === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else display.value += txt;
  };
});
