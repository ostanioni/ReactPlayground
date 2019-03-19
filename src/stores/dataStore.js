import { observable, action, /*computed*/} from 'mobx'
import axios from 'axios'

//mobx.configure({ enforceActions: "observed" })
class Store {
  @observable data = null
  @observable error = false
  @observable errorMsg = false
  @observable loading = false    
  @action.bound
    getData(path){
      axios.get(path)
      .then( (response)=>this.handleSuccess(response.data) )
      .catch( (error)=>this.handleError(error) )
    }
  @action.bound
    handleSuccess(data) {
        this.data = JSON.parse(data)
    }
  @action.bound
    handleError(error) {
        this.state = "error"
    }
    /*
  @computed get langTogglerColor() {
    
  }*/
}
const dataStore = new Store()
export default dataStore
