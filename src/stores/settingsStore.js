import { observable, action, computed} from 'mobx'
class Settings {
  @observable theme = 'dark'
  @observable themePrism = ''
  @observable lang = 'en'
  @action toggleTheme = ( )=>{
    this.theme === 'dark'? this.theme = 'light': this.theme = 'dark'
    console.log('this.theme = ', this.theme )
  }
  @action toggleLang = ( )=>{
    this.lang === 'en'? this.lang = 'ru': this.theme = 'en'
    console.log('this.lang = ', this.lang )
  }
  @computed get params(){
    return {
      
    }
  }
}
const settingsStore = new Settings()
export default settingsStore
