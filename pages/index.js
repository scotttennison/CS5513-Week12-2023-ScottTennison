import Link from 'next/link';
import Layout from '../components/layout';
import { getTeamList } from '../lib/data';


export async function getStaticProps() {
  const allTeam = await getTeamList();
  return {
    props: { allTeam }
  };
}


export default function Home({ allTeam }) {
  
  return (
    <Layout home>
      <div className="home-container">
        <h1>Top Six Posts</h1>
        <ul className="list-group">
          {allTeam.map(({ id, post_title }) => (
            <li key={id} className="list-group-item">
              <Link href={`/${id}`} className="list-group-link">
                {post_title}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </Layout>
  );
}