import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';



const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (!values.username.split('').includes(' ')) {
    errors.username = 'It must be last and first name =)';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};


const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => {

  const borderStyle = touched && error ? { border: '1px solid #c4818c', background: '#f2dede' } : {};

  return (
    <div>
      <div>
        <input style={borderStyle}
          {...input}
          placeholder={placeholder}
          type={type}
          className='from-input' />

        {touched &&
          (error && <span style={{color: '#a94442'}}>{error}</span>)}
      </div>
    </div>
  );
};

const renderFieldMessage = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <textarea rows={6} {...input} placeholder={placeholder} className='from-text-area'>
      </textarea>
    </div>
  </div>
);


class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.onFormSubmit)}>
        <div className='row'>
          <div className='col-6'>
            <Field
              name="username"
              component={renderField}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className='col-6'>
            <Field
              name="email"
              component={renderField}
              placeholder="Email"
            />
          </div>
          <div className='col-12'>
            <Field
              name="message"
              component={renderFieldMessage}
              placeholder="Message"
            />
          </div>
        </div>




        <div>
          <button type="submit" className='btn btn-success'>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'simple',
  validate
})(Form);
