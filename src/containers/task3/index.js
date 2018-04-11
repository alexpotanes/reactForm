import React, {Component} from 'react';
import {Link, Redirect, Route, Router, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import InputText from "../../components/inputText";
import InputSelect from "../../components/inputSelect";
import InputRange from "../../components/inputRange";
import InputCheckbox from "../../components/inputCheckbox";
import InputRadio from "../../components/inputRadio";
import ButtonSubmit from "../../components/ButtonSubmit";
import './style.less';

class Task3 extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: '',
      password: '',
      email: '',
      town: '',
      checked: true,
      minValue: 0,
      maxValue: 100,
      step: 1,
      rangeValue: 48,
      selectedOption: 'option1',
      optionValue: [
        'Москва',
        'Петербург',
        'Казань'
      ],
    };
  }

  onChangeField(name) {
    return (value) => {
      this.setState({[name]: value})
    };
  }

  handleSubmit(e) { 
    if (!this.validate()) { e.preventDefault() } 
  }

  render() {
    return (
      <div className="Task3">
      <form ref="form"> 
        <InputText 
          className="Task3__input" 
          value={this.state.login} 
          onChange={this.onChangeField('login')} 
          type="text" placeholder="Логин" 
         /> 
        <InputText 
          className="Task3__input" 
          value={this.state.password} 
          onChange={this.onChangeField('password')} 
          type="password" placeholder="Пароль" 
         />
        <InputText 
          className="Task3__input" 
          value={this.state.email} 
          onChange={this.onChangeField('email')} 
          type="email" placeholder="Email" 
         />

        <InputSelect className="Task3__select" 
        value={this.state.town} 
        onChange={this.onChangeField('town')} 
        placeholderSelect="Выберите город"
        optionValue={this.state.optionValue}>
        </InputSelect> <br/>

        <InputRange className="Task3__slider" 
          value={this.state.rangeValue} 
          onChange={this.onChangeField('rangeValue')} 
          min={this.state.minValue} 
          max={this.state.maxValue} 
          step={this.state.step} /><br/>

        <InputCheckbox onChange={this.onChangeField('checked')} checked={this.state.checked} >на все согласный</InputCheckbox><br/>

          <InputRadio
            name="choice"
            value="option1"
            onChange={this.onChangeField('selectedOption')}
            checked={this.state.selectedOption === 'option1'}>
            Да
          </InputRadio>

          <InputRadio
            name="choice"
            value="option2"
            onChange={this.onChangeField('selectedOption')}
            checked={this.state.selectedOption === 'option2'}>
            Нет
          </InputRadio><br/>

        <ButtonSubmit className="Task3__button">Поехали!</ButtonSubmit>
      </form>
      </div>
    );
  }
}

export default withRouter(connect(state => ({

}))(Task3));
