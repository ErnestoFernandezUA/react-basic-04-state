import React from 'react';

type User = {
  id: number;
  name: string;
  type: string;
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

    const {
      onDelete,
      onRename,
    } = this.props;

    return (
      <>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onRename(id, name);
          }}
        >
          {this.props.user.id}
          -
          {this.props.user.name}
          -
          {this.props.user.type}
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
          <button
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </form>
      </>
    );
  }
}
