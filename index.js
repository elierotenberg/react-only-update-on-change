var _ = require("lodash");
module.exports = function shouldComponentUpdate(nextProps, nextState) {
	return !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState);
};
