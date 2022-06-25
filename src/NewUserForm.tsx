import React from 'react';

type Props = {
  onAdd: (name: string) => void;
};

type State = {
  username: string;
};

export class NewUserForm extends React.Component<Props, State> {
  state = {
    username: '',
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!this.state.username) {
      return;
    }

    this.props.onAdd(this.state.username);

    this.setState({
      username: '',
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter a name"
          value={this.state.username}
          onChange={(event) => {
            this.setState({
              username: event.target.value,
            });
          }}
        />
        <button
          type="submit"
        >
          Add
        </button>
      </form>
    );
  }
}
