const {Button, Form, FormGroup, Label, Input, FormText} = Reactstrap

class TaskForm extends React.Component {

  onTaskCommit(){
	 alert("save");
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