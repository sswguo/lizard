// react-bootstrap datatable
// http://allenfang.github.io/react-bootstrap-table/docs.html
class DataTableComponent extends React.Component{	
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
	    <BootstrapTable data= {items} search headerStyle={ { background: '#e0ffe2' } } pagination>
           <TableHeaderColumn isKey dataField='id'>Task ID</TableHeaderColumn>
           <TableHeaderColumn dataField='name'>Task Name</TableHeaderColumn>
           <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }
}
