import React from 'react';
import styles from './EditUser.module.css';

interface EditUserProps {
  email: string;
  fullName: string;
  saveEdit: (updatedUser: { email: string; name: string } | null) => void;
}

const EditUser: React.FC<EditUserProps> = ({ email, fullName, saveEdit }) => {
  const [editedEmail, setEditedEmail] = React.useState(email);
  const [editedFullName, setEditedFullName] = React.useState(fullName);

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedFullName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEmail(event.target.value);
  };

  const handleSaveEdit = () => {
    saveEdit({ email: editedEmail, name: editedFullName });
  };

  return (
    <div className={styles.edit_user_wrap}>
      <div className={styles.edit_block}>
        <h1 className={styles.edit_title}>Редактирование</h1>

        <input
          className={`${styles.edit_input}`}
          type="text"
          placeholder="Полное имя"
          value={editedFullName}
          onChange={handleFullNameChange}
        />
        <input
          className={`${styles.edit_input}`}
          type="email"
          placeholder="Email"
          value={editedEmail}
          onChange={handleEmailChange}
        />

        <button onClick={handleSaveEdit} className={styles.edit_btn}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default EditUser;
