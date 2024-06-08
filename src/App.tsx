import React from 'react';
// import axios from 'axios';
import userData from '../db/users.json';

import styles from './App.module.css';

import Header from './components/Header';
import UserItem from './components/UserItem';
import AddNewUserModal from './components/AddNewUserModal';

import { IUser } from './interfaces/IUser';
import UserDeletePopup from './components/UserDeletePopup';
import EditUser from './components/EditUser';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [addUserIsOpen, setAddUserIsOpen] = React.useState(false);
  const [notificationIsOpen, setNotificationIsOpen] = React.useState(false);
  const [editIsOpen, setEditIsOpen] = React.useState(false);
  const [editedUser, setEditedUser] = React.useState<IUser | null>(null);

  const openAdduserModal = () => {
    setAddUserIsOpen(true);
  };

  const closeAddUserModal = () => {
    setAddUserIsOpen(false);
  };

  const addUser = (newUser: IUser) => {
    setUsers([...users, newUser]);
    closeAddUserModal();
  };

  const editUser = (userEmail: string) => {
    const userToEdit = users.find((user) => user.email === userEmail);
    if (userToEdit) {
      setEditedUser(userToEdit);
      setEditIsOpen(true);
    }
  };

  const saveEdit = (updatedUser: { email: string; name: string } | null) => {
    if (updatedUser) {
      const updatedUsers = users.map((user) =>
        user.email === updatedUser.email ? { ...user, name: updatedUser?.name } : user,
      );
      console.log('updatedUsers before setUsers:', updatedUsers); // Добавленный console.log
      setUsers(updatedUsers);
      console.log('updatedUsers after setUsers:', updatedUsers); // Добавленный console.log
    }
    setEditIsOpen(false);

    console.log(updatedUser);
  };

  const deleteUser = (email: string) => {
    setUsers(users.filter((user) => user.email !== email));
    setNotificationIsOpen(true);
  };

  const closePopup = () => {
    setNotificationIsOpen(false);
  };

  React.useEffect(() => {
    // axios
    //   .get('http://localhost:3001/users')
    //   .then((response) => {
    //     setUsers(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setUsers(userData.users);
  }, []);

  return (
    <div className={styles.app_wrap}>
      <div className={styles.team_block}>
        <Header openAdduserModal={openAdduserModal} />

        {users.map((user, index) => (
          <UserItem {...user} key={index} deleteUser={deleteUser} editUser={editUser} />
        ))}

        {addUserIsOpen && (
          <AddNewUserModal closeAddUserModal={closeAddUserModal} addUser={addUser} />
        )}

        {notificationIsOpen && <UserDeletePopup closePopup={closePopup} />}

        {editIsOpen && (
          <EditUser
            email={editedUser?.email || ''}
            fullName={editedUser?.name || ''}
            saveEdit={saveEdit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
