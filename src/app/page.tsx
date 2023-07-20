// import Link from 'next/link';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ejemplo Uso Recoil Y Material Ui</h1>
      <Link href={'/listuser'}>Ver Usuarios</Link>
    </div>
  );
}
