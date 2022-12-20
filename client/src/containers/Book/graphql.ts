import { gql } from '@apollo/client'

export const GET_BOOK_BY_ID = gql`
  query getBook($id: ID!) {
    getBook(id: $id) {
      id
      description
      title
      pubDate
      author {
        id
        lastname
        firstname
      }
      comments {
        author
        text
      }
    }
  }
`

export const ADD_BOOK_COMMENT_MUTATION = gql`
  mutation addNewBookComment($comment: NewComment!) {
    addComment(comment: $comment) {
      id
      comments {
        id
        author
        text
      }
      pubDate
    }
  }
`
