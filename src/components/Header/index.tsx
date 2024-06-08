import React from 'react';
import styles from './Header.module.css';
import searchIcon from '../../assets/search_icon.svg';

interface IHeaderProps {
  openAdduserModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openAdduserModal }) => {
  return (
    <header className={styles.header}>
      <div className={styles.team_text}>Команда</div>

      <div className={styles.search_add_block}>
        <div className={styles.search_input_wrap}>
          <input className={styles.search_input} type="text" placeholder="Поиск по Email" />
          <img src={searchIcon} alt="search-icon" />
        </div>
        <button onClick={openAdduserModal} className={styles.add_user_btn}>
          Добавить пользователя
        </button>
      </div>
    </header>
  );
};

export default Header;
