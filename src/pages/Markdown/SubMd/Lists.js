import React, { Component } from 'react';

export default class Lists extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    };

    handleSelect(e) {
        const select = this.props.select;
        select(e.target.id);
    }

    render() {
        const { nameLists } = this.props;
        let color = { color: 'red'};
        const lists = (
            <ul>
                {nameLists.map(name => <li key={name.id} id={name.id} style={name.select? color : {}} onClick={this.handleSelect}>{name.content}</li>)}
            </ul>
        );
        return(
            <div className="markdown-left">
                {lists}
            </div>
        )
    }
}