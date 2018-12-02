// Boilerplate that creates the withApollo higher-order React/Next.js component
// with the Apollo client instance in it. This gets used as a wrapper for the
// app in /pages/_app.js.

import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

// Create Apollo client
function createClient({ headers }) {
  return new ApolloClient({
    // Endpoint URI for backend API
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    // Middleware that includes headers and credentials with requests
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
