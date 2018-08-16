const { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } = AvailityReactstrapValidation;
const { Button, Label, FormGroup } = Reactstrap;

const validateName = (value) => {
	console.log(value)
	return "Using custom validaton for Name"; 
}

class FormValidation extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  render() {
    return (
      <div>
        <AvForm onSubmit={this.handleSubmit}>
          {/* With AvField */}
          <AvField name="name" label="Name" required validate = {{ validateName }}/>
          {/* With AvGroup AvInput and AvFeedback to build your own */}
          <AvGroup>
            <Label for="example">Rank</Label>
            <AvInput name="rank" id="example" required/>
            {/* this only shows when there is an error, use reactstrap's FormFeedback if you want is to always be displayed */}
            <AvFeedback>This field is required!</AvFeedback>
          </AvGroup>
          {/* Radios */}
          <AvRadioGroup inline name="radioExample4" label="Radio Buttons! (inline)" required>
            <AvRadio label="Bulbasaur" value="Bulbasaur" />
            <AvRadio label="Squirtle" value="Squirtle" />
            <AvRadio label="Charmander" value="Charmander" />
            <AvRadio label="Pikachu" value="Pikachu" disabled />
          </AvRadioGroup>
          {/* With select and AvField */}
          <AvField type="select" name="select" label="Option" helpMessage="Idk, this is an example. Deal with it!">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </AvField>

          <AvField type="select" name="select-multiple" label="Option" helpMessage="MULTIPLE!" multiple required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </AvField>
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </AvForm>
        {this.state.values && <div>
          <h5>Submission values</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
      </div>
    );
  }
}