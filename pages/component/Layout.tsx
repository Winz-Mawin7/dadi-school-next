import React, { ReactElement } from 'react';
import Footer from './Footer';
import styles from '../../styles/Layout.module.css';
import { DatePicker } from 'antd';

function Layout({ children }): React.ReactElement {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
