import React, { Component } from 'react'
import { IocPropTypes } from '../utils'

export class IoCInjector extends Component {

    constructor(props, context) {
        super(props, context);

        const { WrappedComponent } = this.constructor;

        this.ioc = props.ioc || context.ioc;
        this.dependencies = {};

        if (!WrappedComponent) {
            throw new TypeError('WrappedComponent is not defined!');
        }

        if (this.ioc) {
            if (WrappedComponent.$inject) {
                Object.assign(this.dependencies, this.ioc.resolveAll(WrappedComponent.$inject));
            }
        } else {
            throw new Error(
                `IoC Container was not found in component context! Please check that your component or root component wrapped to <IoC/>.`
            );
        }
    }

    render() {
        const { WrappedComponent } = this.constructor;
        return (
            <WrappedComponent {...this.dependencies} {...this.props} />
        );
    }
}

IoCInjector.contextTypes = {
    ioc: IocPropTypes.iocResolverType.isRequired
};

IoCInjector.WrappedComponent = null;

Object.defineProperty(IoCInjector, 'displayName', {
    get: function () {
        return this.WrappedComponent.displayName || this.WrappedComponent.name || 'IoCInjector';
    }
});

