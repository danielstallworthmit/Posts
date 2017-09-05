import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {
    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                {field.type === "text" ?
                <input className="form-control"
                    type="text" 
                    {...field.input}
                /> :
                <textarea className="form-control"
                    {...field.input}
                />
                }
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    type="text"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    type="text"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    type="textarea"
                    name="content"
                    component={this.renderField}
                />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!"
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!!"
    }
    if (!values.content) {
        errors.content = 'Enter some content!!'
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);