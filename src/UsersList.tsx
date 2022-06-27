import React from 'react';
import { UserItem } from './UserItem';

type User = {
  id: number;
  name: string;
  type: string;
};

type Props = {
  users: User[];
  onDelete: (userId: number) => void;
  onRename: (userId: number, name: string) => void;
};

export const UsersList: React.FC<Props> = ({
  users,
  onDelete,
  onRename,
}) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <UserItem
            user={user}
            onDelete={onDelete}
            onRename={onRename}
          />
        </li>
      ))}
    </ul>
  );
};
