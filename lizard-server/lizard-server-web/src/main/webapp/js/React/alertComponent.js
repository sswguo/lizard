const {Alert} = Reactstrap

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color={this.props.color} isOpen={this.state.visible} toggle={this.onDismiss}>
        {this.props.text}
      </Alert>
    );
  }
}