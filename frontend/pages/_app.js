// Custom Next.js App component

import { ApolloProvider } from 'react-apollo';
import App, { Container } from 'next/app';
import Page from '../components/Page';
import withData from '../lib/withData';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      // Crawls all pages to get their initial props so they're available from
      // the app component.
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    // apollo props comes from withData high order component
    // pageProps comes from getInitialProps
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

// Wrap app in withData high-order-component that provides the apollo pop.
export default withData(MyApp);
