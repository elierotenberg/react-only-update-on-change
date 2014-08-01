react-only-update-on-change
========================

Implementation of [React](http://facebook.github.io/react/index.html) components' [`shouldComponentUpdate`](http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate) for stateful and propful components.
When using this implementation as a components' `shouldComponentUpdate`, it will only re-render upon state and/or prop change (shallow comparison).

Usage
=====

```jsx
/** @jsx React.DOM */
var React = require("react");

var MyComponent = React.createClass({
	/* ... */
	shouldComponentUpdate: require("react-only-update-on-change"),
	/* ... */
});
/* ... */
```
