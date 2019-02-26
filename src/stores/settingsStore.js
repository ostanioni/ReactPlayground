import { observable, action, computed} from 'mobx'
class Settings {
  @observable theme = 'dark'
  @observable themePrism = ''
  @observable lang = 'en'
  @action toggleTheme = ( )=>{
    this.theme === 'dark'? this.theme = 'light': this.theme = 'dark'
    console.log('this.theme = ', this.theme )
  }
  @computed get light(){
    return {}
  }
}
const settingsStore = new Settings()
export default settingsStore
