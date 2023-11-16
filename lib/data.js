import got from 'got';

const dataURL = "https://dev-tennisoncb50c.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1";

export async function getTeamList() {
  try {
    const response = await got(dataURL);
    const jsonObj = JSON.parse(response.body);

    jsonObj.sort((a, b) => a.post_date.localeCompare(b.post_date));

    return jsonObj.map(item => ({
      id: item.ID.toString(),
      post_title: item.post_title
    }));
  } catch (error) {
    console.error('Error fetching team list:', error);
    return []; 
  }
}


export async function getTeamIds() {

  let jsonString;
  try {
    
    jsonString = await got(dataURL);
    
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);

  
  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });
}

export async function getTeamData(idRequested) {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }


  const jsonObj = JSON.parse(jsonString.body);

  
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  
  return objReturned;
}