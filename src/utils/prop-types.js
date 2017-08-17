import PropTypes from 'prop-types'

export const iocResolverType = PropTypes.shape({
    resolve: PropTypes.func.isRequired,
    resolveAll: PropTypes.func.isRequired,
    has: PropTypes.func.isRequired
});

export default {
    iocResolverType
};
