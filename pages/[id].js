import Layout from '../components/layout';
import { getTeamIds, getTeamData } from '../lib/data';

export async function getStaticProps({ params }) {
  
  const itemTeam = await getTeamData(params.id);
  
  return {
    props: {
      itemTeam
    }
  };
}

export async function getStaticPaths() {
  const data = await getTeamIds(); 
  const paths = data
    .filter(item => item?.id != null) 
    .map(item => {
      const idString = item.id.toString(); 
      return {
        params: {
          id: idString
        },
      };
    });

  return {
    paths,
    fallback: false 
  };
}




export default function Entry({ itemTeam }) {
  return (
    <Layout>

      <article className="card col-6">
        <div className="card-header text-white">
          <h5 className="card-title">{itemTeam.post_title}</h5>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2"><strong>Author:</strong> {itemTeam.post_author}</h6>
          <p className="card-text"><strong>Date:</strong> {itemTeam.post_date}</p>
          <a href={itemTeam.guid} className="card-link" target="_blank" rel="noopener noreferrer">Post</a>
        </div>
        <div className="card-footer bg-light">
        </div>

      </article>

    </Layout>

  );
}