import React from 'react';
import styles from './UserItem.module.css';
import UserImage from '../UserImage';
import { IUser } from '../../interfaces/IUser';
import PermissionItem from '../PermissionItem';
import SettingsMenu from '../SettingsMenu';

interface IUserItemProps extends IUser {
  deleteUser: (email: string) => void;
  editUser: (email: string) => void;
}

const UserItem: React.FC<IUserItemProps> = (userData) => {
  const [settingsMenuIsOpen, setSettingsMenuIsOpen] = React.useState(false);

  const toggleSettingsMenu = () => {
    setSettingsMenuIsOpen((prev) => !prev);
  };

  const handleEditUser = () => {
    userData.editUser(userData.email);
    setSettingsMenuIsOpen(false);
  };

  const handleDeleteUser = () => {
    userData.deleteUser(userData.email);
    setSettingsMenuIsOpen(false);
  };

  return (
    <div className={styles.user_item_wrap}>
      <div className={styles.user_info_block}>
        <UserImage image={userData.image} />

        <div className={styles.user_info_data}>
          <div className={styles.user_name_email_block}>
            <span className={styles.user_name}>{userData.name}</span>
            <span className={styles.user_email}>{userData.email}</span>
          </div>

          <div className={styles.permissions_list}>
            {userData.permissions.map((permission, index) => (
              <PermissionItem key={index} permission={permission} />
            ))}
          </div>
        </div>
      </div>

      <svg
        onClick={toggleSettingsMenu}
        className={styles.dots_icon_svg}
        width="20"
        height="4"
        viewBox="0 0 20 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="currentColor" />
        <circle cx="10" cy="2" r="2" fill="currentColor" />
        <circle cx="18" cy="2" r="2" fill="currentColor" />
      </svg>

      {settingsMenuIsOpen && (
        <SettingsMenu deleteUser={handleDeleteUser} handleEditUser={handleEditUser} />
      )}
    </div>
  );
};

export default UserItem;
