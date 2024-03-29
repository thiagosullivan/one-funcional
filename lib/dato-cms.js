const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = 'b73cd4a55d1d6bfd4d64b4f8310964';

async function fetchCmsAPI(query, { variables } = {}){
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPosts(){
  const data = await fetchCmsAPI(`
    {
      allBlogs {
        id
        title
        slug
        createdAt
        author {
          authorName
          authorPhoto {
            url
          }
        }
        categories {
          categoryName
          slug
        }
        postImg {
          url
        }
        resume
        postTxt
        videoUrl
      }
    }
  `);
  
  return data.allBlogs;
}

export async function getAllTeam(){
  const data = await fetchCmsAPI(`
    {
      allTeams {
        teamName
        teamPhoto {
          url
        }
        degrees
        teamRole
        fbLink
        igLink
        twLink
      }
    }
  `);
  
  return data.allTeams;
}

export async function getAllCategories(){
  const data = await fetchCmsAPI(`
    {
      allCategories {
        slug
        categoryName
      }
    }
  `);
  
  return data.allCategories;
}

export default { getAllPosts, getAllTeam, getAllCategories };