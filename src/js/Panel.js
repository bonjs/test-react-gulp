//var Head = require('./Head');
//var Body = require('./Body');



var Head = React.createClass({
    render: function() {
    	return <div style={{border: "1px red solid"}}>head</div>;
    } 
}); 

var Body = React.createClass({
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
	    return <div >
	    	<button onClick={this.add}>新增</button>
	    	<button onClick={this.del}>删除</button>
	    	{
	    		this.state.arr.map(function(it, i) {
	    			return <div style={{border: "1px red solid", width: "200px"}}>{it.name}</div>
	    		})
	    	}
	    </div>
	}
});
var Panel = React.createClass({
    render: function(){
    	return <div style={{width:"200px"}}> 
			<Head /> 
			<Body /> 
		</div>;
    }
});

ReactDOM.render(<Panel />, document.getElementById('content'));