import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
//Apollo Provider is the glue layer between apollo and react and is a react component
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
