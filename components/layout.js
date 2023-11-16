import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div className="layout-container">
      <Head>
        <title>Basic Next.js App</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      

      <main className="main-content">
        {children}
      </main>
      {!home && (
        <Link href="/" className="btn text-white mt-3 back-to-home">
          ← Back to home
        </Link>
      )}

   

    </div>
  );
}