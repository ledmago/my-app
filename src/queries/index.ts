import { gql } from "@apollo/client";

interface FilterType {
  name?: String;
  status: String;
  species: String;
  type: String;
  gender: String;
}

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        prev
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
        }
        created
      }
    }
  }
`;

export { GET_CHARACTERS };
