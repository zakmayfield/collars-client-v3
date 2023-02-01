import Head from 'next/head';
import ClientOnly from '@/components/ClientOnly';
import Pets from '@/components/Pets';

export default function ClientSide() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <ClientOnly>
          <Pets />
        </ClientOnly>
      </main>
    </div>
  );
}
