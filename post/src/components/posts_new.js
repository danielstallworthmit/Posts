import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control"
                    type={field.type} 
                    {...field.input}
                />
            </div>
        );
    }
    render() {
        return (
            <form>
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
                    type="textbox"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);