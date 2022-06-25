import React from 'react';
import './App.scss';
import { NewUserForm } from './NewUserForm';
import { UsersList } from './UsersList';

type User = {
  id: number;
  name: string;
};

type State = {
  users: User[];
};

const usersFromServer = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Laila' },
  { id: 3, name: 'Lena' },
];

export class App extends React.Component<{}, State> {
  state = {
    users: usersFromServer,
  };

  // addStudent = () => {
  //   this.setState((prevState) => ({ studentsCount: prevState.studentsCount + 1 }));
  // };

  // removeStudent = () => {
  //   this.setState((prevState) => ({ studentsCount: prevState.studentsCount - 1 }));
  // };

  // addEmployee = () => {
  //   this.setState((prevState) => ({ employeesCount: prevState.employeesCount + 1 }));
  // };

  // removeEmployee = () => {
  //   this.setState((prevState) => ({ employeesCount: prevState.employeesCount - 1 }));
  // };

  addUser = (name: string) => {
    this.setState(prevState => {
      const newUser = {
        id: Math.max(...prevState.users.map(user => user.id)) + 1,
        name,
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
    console.log(users);

    return (
      <div className="">
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
