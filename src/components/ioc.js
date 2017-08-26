import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { IocPropTypes } from '../utils';

/**
 * React component which share instance of IoC Container with React components using context
 * 
 * It should wrap all components which want to use dependencies injection
 */
export class IoC extends Component {
    constructor(props, context) {
        super(props, context);
        this.container = props.container;
    }

    getChildContext() {
        return { ioc: this.container }
    }

    render() {
        return Children.only(this.props.children)
    }
}

IoC.propTypes = {
    container: IocPropTypes.iocResolverType.isRequired,
    children: PropTypes.element.isRequired
};

IoC.childContextTypes = {
    ioc: IocPropTypes.iocResolverType.isRequired
};

