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
      this.loading = true
      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3001',
        timeout: 2000,
        // headers: {'X-Custom-Header': 'foobar'}
      });
      axiosInstance.get(path)
      .then( (response)=>this.handleSuccess(response.data) )
      .catch( (error)=>this.handleError(error) )
    }
  @action.bound
    handleSuccess(data) {
        this.data = data
        this.loading = false
        return this.data
        // console.log('dataStore LOADED...', data)
    }
  @action.bound
    handleError(error) {
        this.error = true
        this.loading = false
        //console.log('dataStore ERRORED...', error)
    }
  /*
  @computed get () {
    
  }*/
}
const dataStore = new Store()
export default dataStore
