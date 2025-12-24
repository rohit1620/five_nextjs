import React from 'react';
import styles from './page.module.css'
import EventFunctionState from '@/components/EventFunctionState';

const page = () => {
  return (
    <div className={styles.textcenter}>
      <h1>This is main page</h1>
      <EventFunctionState/>
    </div>
  )
}

export default page
