class TaskDetailsComponent extends React.Component{	
  constructor(props) {
    super(props);
  }

  render() {
    const { task } = this.props;
    	if (task) {
    	return (
    	  <div>
  	        <h4>{task.name} | {task.description}</h4>
  	      </div>
  	    );
    	}else{
    		return (<div><h4>No selected task.</h4></div>);
    	}
  }
}