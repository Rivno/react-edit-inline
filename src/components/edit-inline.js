import React, { Component } from 'react';

class EditInline extends Component {

    constructor() {
        super();

        this.state = {
            isEdit: false
        };
    }

    edit() {
        this.setState({isEdit: !this.state.isEdit});
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.edit();
        }
    }

    componentDidUpdate() {
        if (this.state.isEdit === true && this.props.onEditEnter) {
            this.props.onEditEnter();
        }

        if (this.state.isEdit === false && this.props.onEditLeave) {
            this.props.onEditLeave();
        }
    }

    render() {
        const cssClass = `react-edit-inline ${this.props.className ? this.props.className : ''}`;

        if (this.state.readOnly) {
            return (
                <div className={cssClass}>
                    <span className="react-edit-inline-label">{this.props.value}</span>
                </div>
            );
        }

        if (!this.state.isEdit) {
            return (
                <div className={cssClass}>
                    <span className="react-edit-inline-label react-edit-inline-icon" onClick={this.edit.bind(this)}>{this.props.value}</span>
                </div>
            );
        }

        return (
            <div className={cssClass} onKeyUp={this.onKeyUp.bind(this)}>
                {this.props.children}
            </div>
        );
    }
}

export default EditInline;