const {Button, Form, FormGroup, Label, Input, FormText, UncontrolledAlert} = Reactstrap

class TaskForm extends React.Component {

  onTaskCommit(){
	  $.ajax({
		  type: "POST",
		  url: "/lizard/rest/tasks/add",
		  contentType: 'application/json',
		  dataType: "json",
		  data: JSON.stringify({
			  name: $("#taskName").val(),
			  description: $("#taskDescription").val()
		  }),
		  success: function(data) {
			  ReactDOM.render(
			   <AlertComponent color="success" text="Create task successfully."/>,
			   document.getElementById('alerts')
			  );
		  },
		  error: function(xhr, status, err) {
			  ReactDOM.render(
			   <AlertComponent color="danger" text={xhr.responseText}/>,
			   document.getElementById('alerts')
			  );
		  }
		});
  }

  render() {
    return (
       <Form>
        <FormGroup>
          <Label for="taskName">Name</Label>
          <Input type="text" name="taskName" id="taskName" />
        </FormGroup>
        <FormGroup>
          <Label for="taskDescription">Description</Label>
          <Input type="text" name="taskDescription" id="taskDescription" />
        </FormGroup>
        <Button type="button" onClick={() => this.onTaskCommit()}>Submit</Button>
      </Form>
    );
  }
}