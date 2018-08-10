// react-bootstrap datatable
// http://allenfang.github.io/react-bootstrap-table/docs.html
$.ajax({
      url: "rest/tasks",
      dataType: 'json',
      cache: false,
      success: function(data) {
        ReactDOM.render(
            <BootstrapTable data= {data} search headerStyle={ { background: '#e0ffe2' } }>
               <TableHeaderColumn isKey dataField='id'>Task ID</TableHeaderColumn>
	           <TableHeaderColumn dataField='name'>Task Name</TableHeaderColumn>
	           <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
            </BootstrapTable>,
            document.getElementById('tasks-dt')
        );
      },
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }
    });