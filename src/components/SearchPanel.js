import React from "react";
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
  padding: 0.25em 1em;
`;
export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.setPreviosSearchValue = this.setPreviosSearchValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hSubmit = this.hSubmit.bind(this);
  }
  setPreviosSearchValue(){
    if ( localStorage.getItem('previosSearchValue') ) {
      this.setState( { 'value': localStorage.getItem('previosSearchValue') } )
    }
  }
  handleChange(event) {
    localStorage.setItem('previosSearchValue', event.target.value);
    this.setState({value: event.target.value});
  }
  hSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.handleSubmit( this.state.value );
  }
  componentDidMount() { 
    this.setPreviosSearchValue();
  }
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.hSubmit}>
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