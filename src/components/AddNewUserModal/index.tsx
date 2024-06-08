import React from 'react';
import styles from './AddNewUserModal.module.css';

import closeModal from '../../assets/close_modal.svg';
import { IUser } from '../../interfaces/IUser';

interface IAddNewUserModalProps {
  closeAddUserModal: () => void;
  addUser: (userData: IUser) => void;
}

const selectOptionsList = [
  'Все',
  'Модерация объявлений',
  'Блог',
  'Тех. поддержка',
  'Обращения клиентов',
  'Аналитика',
  'Акции',
];

const AddNewUserModal: React.FC<IAddNewUserModalProps> = ({ closeAddUserModal, addUser }) => {
  const [selectIsOpen, setSelectIsOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;

    if (name === 'Все') {
      if (checked) {
        const allOptionsExceptAll = selectOptionsList.filter((option) => option !== 'Все');
        setSelectedOptions(allOptionsExceptAll);
      } else {
        setSelectedOptions([]);
      }
    } else {
      if (checked) {
        setSelectedOptions((prev) => [...prev, name]);
      } else {
        setSelectedOptions((prev) => prev.filter((option) => option !== name));
      }
    }
  };

  const createNewUser = () => {
    const newUser: IUser = {
      name: fullName,
      email,
      permissions: selectedOptions,
      image: 'http://placehold.it/64x64',
    };
    addUser(newUser);
  };

  return (
    <div className={styles.add_new_user_modal_wrap}>
      <div className={styles.modal}>
        <h1 className={styles.modal_title}>Отправьте приглашение</h1>

        <input
          className={`${styles.modal_input}`}
          type="text"
          placeholder="Полное имя"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input
          className={`${styles.modal_input}`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className={styles.modal_select} onClick={() => setSelectIsOpen(!selectIsOpen)}>
          Выберите права доступа
        </div>

        <button onClick={createNewUser} className={styles.add_btn}>
          Добавить
        </button>

        <button onClick={closeAddUserModal} className={styles.close_modal}>
          <img src={closeModal} alt="close" />
        </button>

        {selectIsOpen && (
          <ul className={styles.custon_select_options}>
            {selectOptionsList.map((select, index) => (
              <li className={styles.select_item} key={index}>
                <label>
                  <input
                    className={styles.select_checkbox}
                    name={select}
                    type="checkbox"
                    checked={
                      select === 'Все'
                        ? selectedOptions.length === selectOptionsList.length - 1
                        : selectedOptions.includes(select)
                    }
                    onChange={handleCheckboxChange}
                  />
                  <span>{select}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddNewUserModal;
