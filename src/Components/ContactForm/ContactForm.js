import  { Component } from 'react';
import {v4 as uuid} from 'uuid'

const INITIAL__STATE = {
     name: "",
        phone: "",
}

class ContactForm extends Component {
    state = INITIAL__STATE;

    handleChangeForm = ({ target }) => {
    
        const { name, value } = target;
        this.setState({[name]: value})
}

    handleFormSubmit = (event) => {
    event.preventDefault()

        const { name, phone } = this.state;
        const { onAdd } = this.props;
        const isValidatedForm = this.validateForm()
        if (!isValidatedForm)   return
        onAdd({ id: uuid(), name, phone })
        this.resetForm()
    }
    

    validateForm = () => {
const { name, phone } = this.state;
        const { onCheckUnique } = this.props;
        if (!name || !phone) {
            alert('Some fild is empty')
            return false
        }
        return onCheckUnique(name);
    }
    
    
    resetForm = () => this.setState(INITIAL__STATE)

    
    
    render() {
        const { name, phone } = this.state;

        return (

            <form onSubmit={this.handleFormSubmit}>
                <input type='text' name='name' placeholder='Enter name' value={name} onChange={this.handleChangeForm} />
                <input type='tel' name='phone' placeholder='Enter phone number' value={phone} onChange={this.handleChangeForm }/>
<button type='submit'>Add Contact</button>
            </form>
        )
}

}


export default ContactForm;