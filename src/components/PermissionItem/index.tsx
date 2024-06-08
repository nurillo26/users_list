import React from 'react';
import styles from './PermissionItem.module.css';

const PermissionItem: React.FC<any> = ({ permission }) => {
  return <span className={styles.permission_item}>{permission}</span>;
};

export default PermissionItem;
