import React, { Component } from 'react';

const queryString = require('query-string');

export class Gemini extends Component {

    componentWillMount() {
        const query = queryString.parse(this.props.location.search);
        const data = require(`../../../gemini/suites/${query.path}.js`);
        this.setState({ data: data });
    }

    requireBlock(path) {
        let block;
        try {
            block = require(`../../${path}`);
        } catch(e) {
            block = require(`../../${path}/index`);
        }

        return block.default
    }

    processBlock(dataItem, index) {
        return (
            <div style={{margin: '10px'}} key={ `${dataItem.block}-${index}` }>
                {
                    React.createElement(
                        this.requireBlock(dataItem.block), dataItem.props
                    )
                }
            </div>
        )
    }

    render() {
        return (
            <div className='gemini-suite-wrapper'>
                {
                    this.state && this.state.data && this.state.data.map((item, index) =>
                        this.processBlock(item, index)
                    )
                }
            </div>
        );
    }
}
