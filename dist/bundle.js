(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Body = React.createClass({displayName: "Body",
    getInitialState: function() {
		return {
			arr: [
				{name: 'sun'},
				{name: 'tom'},
			]
		}
	},
	componentDidMount: function() {
		 
	},
	add: function(e) {
		this.state.arr.push({name: 'a'});
		this.forceUpdate();
	},
	del: function(e) {
		this.state.arr.splice(this.state.arr.length -1, 1);
		this.forceUpdate();
	},
	render: function() {
	    return React.createElement("div", null, 
	    	React.createElement("button", {onClick: this.add}, "新增"), 
	    	React.createElement("button", {onClick: this.del}, "删除"), 
	    	
	    		this.state.arr.map(function(it, i) {
	    			return React.createElement("div", {style: {border: "1px red solid", width: "200px"}}, it.name)
	    		})
	    	
	    )
	}
});

module.exports = Body;

},{}],2:[function(require,module,exports){
var Head = React.createClass({displayName: "Head",
    render: function() {
    	return React.createElement("div", {style: {border: "1px red solid"}}, "head");
    } 
}); 
module.exports = Head;

},{}],3:[function(require,module,exports){
var Head = require('./Head');
var Body = require('./Body');
var Panel = React.createClass({displayName: "Panel",
    render: function(){
    	return React.createElement("div", {style: {width:"200px"}}, 
			React.createElement(Head, null), 
			React.createElement(Body, null)
		);
    }
});

ReactDOM.render(React.createElement(Panel, null), document.getElementById('content'));

},{"./Body":1,"./Head":2}]},{},[2,1,3]);
