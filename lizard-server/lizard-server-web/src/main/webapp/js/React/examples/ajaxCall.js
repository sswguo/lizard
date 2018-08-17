// Ajax call with jquery

class TaskComponent extends React.Component {
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
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} | {item.description}
            </li>
          ))}
        </ul>
      );
    }
  }
}

//ReactDOM.render(
//  <TaskComponent />,
//  document.getElementById('tasks')
//);