'use client';

import { useState } from 'react';
import ReachPerPlayerCount from './components/reachPerPlayerCount/ReachPerPlayerCount';
import SelectFactions from './components/selectFactions/SelectFactions';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Root Reach Calculator</h1>
      <ReachPerPlayerCount />
      <SelectFactions />
    </main>
  );
}
