// react-bootstrap datatable
// http://allenfang.github.io/react-bootstrap-table/docs.html
class DataTableAdvanceComponent extends React.Component{	
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      selectedTask: null
    };
    this.onRowClick = this.onRowClick.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "/lizard/rest/tasks",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({items: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  onRowClick(row){
	  console.log(row.name);
	  // https://reactjs.org/docs/state-and-lifecycle.html
	  this.setState({selectedTask: row});
  }
  
  render() {
    const { error, isLoaded, items, selectedTask } = this.state;
    const options = {
    	onRowClick: this.onRowClick	
    };
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
	    <BootstrapTable data= {items} options={ options } search maxHeight='453px' headerStyle={ { background: '#cc9112' } } pagination>
           <TableHeaderColumn isKey dataField='id'>Task ID</TableHeaderColumn>
           <TableHeaderColumn dataField='name'>Task Name</TableHeaderColumn>
           <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
        </BootstrapTable>
        <TaskDetailsComponent task={selectedTask}></TaskDetailsComponent>
        </div>
      );
    }
  }
}
