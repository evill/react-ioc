import React from 'react';
import { IoCInjector } from '../components/ioc-injector';

/**
 * Wraps origin component to high order component which will use IoC container from context to inject dependencies to
 * component
 *
 * @return {Function} React.Component
 */
export let withIoc = (WrappedComponent) => {
    let Injector = class extends IoCInjector {};

    Injector.WrappedComponent = WrappedComponent;

    return Injector;
};

