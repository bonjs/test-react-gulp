var Head = require('./Head');
var Body = require('./Body');
var Panel = React.createClass({
    render: function(){
    	return <div> 
			<Head /> 
			<Body />
		</div>;
    }
});

ReactDOM.render(<Panel />, document.getElementById('content'));