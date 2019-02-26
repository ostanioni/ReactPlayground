const common = {
  "activeText": "#2188c6" // rgb(33,139,198)
}
const dark = {
  ...common,
  "bgColor": "#303030", // rgb(48,48,48)
  "bgHeader": "#000", // rgb(220,217,212)
  "wg": "#212121", // rgb(33,33,33)
  "link": "#e10050", // rgb(255,0,80)
  "textColor": "#fff", // rgb(255,255,255)
  "subText": "#bebebe", // rgb(190,190,190)
  "headerShadow": "0 0 1rem rgb(62,166,255,0.5)",
};
const light = {
  ...common,
  "bgColor": "#fff", // rgb(48,48,48)
  "bgHeader": "#303030", // rgb(48,48,48)
  "wg": "#212121", // rgb(33,33,33)
  "link": "#e10050", // rgb(255,0,80)
  "textColor": "#000", // rgb(255,255,255)
  "subText": "#bebebe", // rgb(190,190,190)
  "headerShadow": "0 0 1rem rgba(0,0,0,0.5)",
};
// bootstrapLinkBlue #61dafb rgb(97,218,251)
// googleLinkBlue rgb(62,166,255)
const themesStore = {
  light,
  dark
}
export default themesStore