import React from 'react';
import './App.scss';
import { NewUserForm } from './NewUserForm';
import { UsersList } from './UsersList';

type User = {
  id: number;
  name: string;
  type: string;
};

type State = {
  users: User[];
};

const usersFromServer = [
  { id: 1, name: 'Anna', type: 'book' },
  { id: 2, name: 'Laila', type: 'book' },
  { id: 3, name: 'Lena', type: 'magazine' },
  { id: 4, name: 'Petya', type: 'magazine' },
  { id: 5, name: 'Kolya', type: 'magazine' },
];

export class App extends React.Component<{}, State> {
  state = {
    users: usersFromServer,
  };

  addUser = (name: string, type: string) => {
    this.setState((prevState) => {
      const newUser = {
        id: Math.max(...prevState.users.map(user => user.id)) + 1,
        name,
        type,
      };

      return {
        users: [...prevState.users, newUser],
      };
    });

    // eslint-disable-next-line no-console
    console.log(this.state.users);
  };

  deleteUser = (userId: number) => {
    this.setState(prevState => ({
      users: prevState.users.filter(
        user => user.id !== userId,
      ),
    }));
  };

  renameUser = (userId: number, name: string) => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            name,
          };
        }

        return user;
      }),
    }));
  };

  render() {
    const {
      users,
    } = this.state;

    // eslint-disable-next-line no-console
    console.log('users', users);

    return (
      <div
        className=""
        style={{
          backgroundColor: 'red',
          height: '100vh',
          padding: '50px',
        }}
      >
        <NewUserForm
          onAdd={this.addUser}
        />

        <UsersList
          users={users}
          onDelete={this.deleteUser}
          onRename={this.renameUser}
        />
      </div>
    );
  }
}
