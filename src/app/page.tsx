'use client';
import styles from "./page.module.css";

import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button
          onClick={() => console.log("Botón clickeado")}
          label="Click me"
        />
      </main>
    </div>
  );
}
