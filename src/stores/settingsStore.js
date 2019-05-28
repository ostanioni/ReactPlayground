import { observable, action, computed} from 'mobx'
class Settings {
  @observable theme = 'dark'
  @observable themePrism = ''
  @observable lang = 'ru'
  @observable searchIsActive = 'false'
  @observable currentPage = 0
  @observable totalPages = 2
  // @observable langTogglerIsActive = 'false'
  // this.langTogglerColor = this.langTogglerColor.bind(this)
  @action toggleTheme = ( )=>{
    this.theme === 'dark'? this.theme = 'light': this.theme = 'dark'
    console.log('this.theme = ', this.theme )
  }
  @action toggleLang = ( )=>{
    this.lang === 'en'? this.lang = 'ru': this.lang = 'en'
    // this.langTogglerIsActive = !this.langTogglerIsActive
    console.log('this.lang = ', this.lang )
  }
  @action toggleDrawer = ()=>{
    let drawer = document.getElementById('drawer')
    let wrapper = document.getElementById('drawerWrapper')
    console.log('DRAWER = ', drawer)
    console.log('WRAPPER = ', wrapper)
    drawer.classList.toggle('drawer-is-open')
    
    const f = () => wrapper.classList.toggle('wrapper-is-hide')
    setTimeout(f,500)
  }
  @action searchActivate = ()=>{
    this.searchIsActive = true
  }
  @computed get langTogglerColor() {
    if ( this.lang === 'en' ) { 
      return '#ff8d00' 
    } else {
      return '#388'
    }
  }
}
const settingsStore = new Settings()
export default settingsStore
