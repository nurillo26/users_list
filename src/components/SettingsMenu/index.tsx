import React from 'react';
import styles from './SettingsMenu.module.css';

interface ISettingsMenuProps {
  deleteUser: () => void;
  handleEditUser: () => void;
}

const SettingsMenu: React.FC<ISettingsMenuProps> = ({ deleteUser, handleEditUser }) => {
  return (
    <div className={styles.settings_wrap}>
      <span className={styles.edit_user} onClick={handleEditUser}>
        Редактировать
      </span>
      <span className={styles.delete_user} onClick={deleteUser}>
        Удалить
      </span>
    </div>
  );
};

export default SettingsMenu;
