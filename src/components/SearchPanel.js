import React from "react";
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: lightblue;
`;
const InputStyled = styled.input`
  size: 15;
  text-align: center;
  border-radius: 7px;
  border: 3px solid lightgray;
  margin: 0 .25rem;
  padding: 0.25em 1em;
  transition: border-color 0.5s ease-out;
  &:focus {
    border-color: lightskyblue;
  }
`;
const ButtonStyled = styled.input`
  border-radius: 7px;
  border: 3px solid gray;
  color: gray;
  /*margin: 0 1em; */
  padding: 0.25em 1em;
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
  setPreviosSearchValue(){
    if ( localStorage.getItem('previosSearchValue') ) {
      this.setState( { 'value': localStorage.getItem('previosSearchValue') } )
    }
  }
  handleChange(event) {

    event.preventDefault();
    event.stopPropagation();

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
  validateIPv4Address(ipAddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
      return (true); 
    }  
    return (false);
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
  componentDidMount() { 
    this.setPreviosSearchValue();
  }
  render() {
    return (
     <Wrapper>
        <form onSubmit={this.handleSubmit}>
        <label>
          Enter IP:
          <InputStyled 
            type="text" 
            onChange={this.handleChange} 
            value={this.state.value}
            maxLength="15"
            minlength="15"
            required
          />
        </label>
        <ButtonStyled type="submit" value="Search" />
      </form>
     </Wrapper>
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
