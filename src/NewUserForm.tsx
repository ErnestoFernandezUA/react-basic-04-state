import React from 'react';
import { TypePicker } from './TypePicker';
import './NewUserForm.scss';

const UserType = ['book', 'magazine', 'note'];

type Props = {
  onAdd: (name: string, type: string) => void;
};

type State = {
  username: string;
  type: string;
};

export class NewUserForm extends React.Component<Props, State> {
  state = {
    username: '',
    type: '',
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!this.state.username) {
      return;
    }

    this.props.onAdd(this.state.username, this.state.type);

    this.setState({
      username: '',
      type: '',
    });
  };

  setType = (type: string) => {
    this.setState({
      type,
    });
  };

  render() {
    return (
      <form
        className="NewUserForm"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter a name"
          value={this.state.username}
          onChange={(event) => {
            this.setState({ username: event.target.value });
          }}
        />
        <TypePicker
          types={UserType}
          value={this.state.type}
          onChange={this.setType}
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
