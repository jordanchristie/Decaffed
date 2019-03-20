import gql  from 'graphql-tag';

export const GET_USER = gql`
  query ($_id: ID!){
    getUser(_id: $_id) {
      name
      image_url
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