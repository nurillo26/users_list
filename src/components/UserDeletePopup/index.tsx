import React from 'react';
import styles from './UserDeletePopup.module.css';

interface ClosePopupProps {
  closePopup: () => void;
}

const UserDeletePopup: React.FC<ClosePopupProps> = ({ closePopup }) => {
  return (
    <div className={styles.delete_popup_wrap}>
      <span>Пользователь успешно удален </span>
      <button onClick={closePopup} className={styles.close_popup}>
        Закрыть
      </button>
    </div>
  );
};

export default UserDeletePopup;
