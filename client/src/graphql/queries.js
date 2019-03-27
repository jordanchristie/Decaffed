import gql  from 'graphql-tag';

export const GET_USER = gql`
  query ($_id: ID!){
    getUser(_id: $_id) {
      name
      profileImg
      notes {
        title
        note
      }
      favoriteShops {
        name
        image_url
        city
        state
      }
    }
  }
`