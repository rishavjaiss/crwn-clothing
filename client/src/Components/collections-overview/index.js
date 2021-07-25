import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Spinner from "../spinner";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
}

function CollectionsOverviewContainer() {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        return loading ? (
          <Spinner />
        ) : (
          <CollectionsOverview collections={data.collections} />
        );
      }}
    </Query>
  );
}

export default CollectionsOverviewContainer;
