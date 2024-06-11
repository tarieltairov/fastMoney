const commandsValues = {
  start: "/start",
  cancel: "/cancel",
  daniyar: "/daniyarlogin",
  haziret: "/haziretlogin",
  botTurnOn: "/turnonbot",
  botTurnOff: "/turnoffbot",
  botIsWorking: "/botworking",
};

const btnType = {
  replacement: "replacement",
  mbank: "mbank",
  omoney: "omoney",
  optima: "optima",
  conclusionMbank: "conclusion_mbank",
  conclusionOmoney: "conclusion_omoney",
  conclusionOptima: "conclusion_optima",
  paid: "paid",
  conclusion: "conclusion",
  accept: "accept",
  reject: "reject",
  startAfterSubscribe: "startAfterSubscribe",
  suspicious: "suspicious",
  normal: "normal",
};

const reqMethod = {
  mbank: "Mbank",
  omoney: "О Деньги!",
  optima: "Оптима",
  conclusion_mbank: "Mbank",
  conclusion_omoney: "О Деньги!",
  conclusion_optima: "Оптима",
};

const commandsBtns = [
  { command: "/start", description: "Старт" },
  { command: "/cancel", description: "Отменить всё" },
];

module.exports = {
  commandsValues,
  commandsBtns,
  btnType,
  reqMethod,
};
