import React from "react";
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

// import SearchResultItem from './SearchResultItem';

//import './App.css';
let InputStyled = styled.input`
  size: 15; 
  text-align: center;
  margin: 0 .25rem;
  font-size: 3vw;
  /* min-width: 125px; */
  border-radius: 3px;
  border: 2px solid palevioletred;
  transition: border-color .5s ease-out;
  padding: 0.25em 1em;
  @media screen and (max-width: 576px){
    width: auto;
    height: 19px;
    font-size: 7vw;
  }
  @media screen and (max-width: 1200px){
    width: auto;
    height: 40px;
  }
`;
const ButtonStyled = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  @media screen and (max-width: 576px){
    font-size: 12px;
    width: 50px;
    height: 19px;
    padding: 10px;
    margin: 10px;
  }
  @media screen and (max-width: 768px){
    font-size: 12px;
    width: 50px;
    height: 19px;
    padding: 10px;
  }
  @media screen and (max-width: 992px){
    font-size: 12px;
    width: 50px;
    height: 19px;
    padding: 10px;
  }
  @media screen and (max-width: 1200px){
    width: 300px;
    height: 40px;
    font-size: 22px;
  }
`;
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.setPreviosSearchValue = this.setPreviosSearchValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSuccess = this.handleSuccess.bind(this);
    this.validateIPv4Address = this.validateIPv4Address.bind(this);
    this.getIPv4Info = this.getIPv4Info.bind(this);    
  }

  handleChange(event) {
    localStorage.setItem('previosSearchValue', event.target.value);
    this.setState({value: event.target.value});
    console.log( localStorage.getItem('previosSearchValue') )
  }
  handleSubmit(event) {

    event.preventDefault();
    event.stopPropagation();

    if ( this.validateIPv4Address(this.state.value) ) {
      this.getIPv4Info(this.state.value);
      this.props.handleSuccess( this.state.result );
     // alert('Address validate' + this.state.value);
    } else {
      this.props.handleError();
      //alert('Notttt' + this.state.value);
    }
  }
  getIPv4Info(ipAddress){
    fetch(`https://api.2ip.ua/provider.json?ip=${ipAddress}`)
    .then(res => res.json())
    .then( json => {
      this.props.handleSuccess(json);
      console.table(json);
    })
    .catch( console.log('Fetch error...') )
  }
  validateIPv4Address(ipAddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
      return (true); 
    }  
    return (false);
  }
  setPreviosSearchValue(){
    if ( localStorage.getItem('previosSearchValue') ) {
      this.setState( { 'value': localStorage.getItem('previosSearchValue') } )
    }
  }
  componentDidMount() { 
    this.setPreviosSearchValue();
  }
  componentWillUnmount() {
    // localStorage.setItem('previosSearchValue', this.state.ipAddressItems);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter IP adress:
          <InputStyled 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            maxLength="15"
            minlength="15"
            required
          />
        </label>
        <ButtonStyled type="submit" value="Search" />
      </form>
    );
  }
}
export default SearchForm;

/*

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      validated: false,
      placeholder: 'PLACEHOLDER2',
      ipv6: false,
      loading: false,
      showAlert: true,
      status: 'STATUS',
      ipVersion: 15  
    };
  }
  componentDidMount() { }
  componentWillUnmount() { }
  handleSubmit(event) {
    fetch('https://api.2ip.ua/provider.json?ip=5.1.5.1')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
      console.table(json)
    })
  }
  render() {
    return (
      <div className="App-search">
        <input type="text" placeholder required /> <button> Search </button>
      </div>
    );
  }
}

export default SearchPanel;
*/
