import { observable, action, computed} from 'mobx'
class Settings {
  @observable theme = 'dark'
  @observable themePrism = ''
  @observable lang = 'en'
  @action setTheme = (theme)=>{
    this.theme === 'dark'? this.theme = 'light': this.theme = 'dark'
    console.log('this.theme = ', this.theme )
  }
  @computed get light(){
    return {}
  }
}
const settingsStore = new Settings()
export default settingsStore

const common = {

}
const dark = {
  "bg": "#303030", // rgb(48,48,48)
  "wg": "#212121", // rgb(33,33,33)
  "link": "#e10050", // rgb(255,0,80)
  "text": "#fff", // rgb(255,255,255)
  "subText": "#bebebe", // rgb(190,190,190)
  "activeText": "#2188c6" // rgb(33,139,198)
};
const light = {
  "bg": "#fff", // rgb(48,48,48)
  "wg": "#212121", // rgb(33,33,33)
  "link": "#e10050", // rgb(255,0,80)
  "text": "#000", // rgb(255,255,255)
  "subText": "#bebebe", // rgb(190,190,190)
  "activeText": "#2188c6" // rgb(33,139,198)
};
// bootstrapLinkBlue #61dafb rgb(97,218,251)
// googleLinkBlue rgb(62,166,255)
const themes = {
  light,
  dark
}