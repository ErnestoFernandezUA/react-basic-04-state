import React from 'react';

type User = {
  id: number;
  name: string;
};

type Props = {
  user: User;
  onDelete: (userId: number) => void;
  onRename: (userId: number, name: string) => void;
};

type State = {
  user: User;
};

export class UserItem extends React.Component<Props, State> {
  state = {
    user: this.props.user,
  };

  render() {
    const {
      name,
      id,
    } = this.state.user;

    return (
      <>
        {this.props.user.name}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.onRename(id, name);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(event) => {
              this.setState((prevState) => ({
                user: {
                  ...prevState.user,
                  name: event.target.value,
                },
              }));
            }}
          />
          <button type="submit">Save</button>
        </form>
        <button
          type="button"
          onClick={() => this.props.onDelete(id)}
        >
          Delete
        </button>
      </>
    );
  }
}
