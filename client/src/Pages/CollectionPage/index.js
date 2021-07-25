import React from "react";
import "./collection-page.styles.scss";
import CollectionItem from "../../Components/collection-item";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Spinner from "../../Components/spinner";
const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

function CollectionPage({ collection }) {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const CollectionPageContainer = ({ match }) => {
  return (
    <Query
      query={GET_COLLECTION_BY_TITLE}
      variables={{ title: match.params.categoryId }}
    >
      {({ loading, error, data }) => {
        console.log(loading);
        return loading ? (
          <Spinner />
        ) : (
          <CollectionPage
            loading={loading}
            collection={data.getCollectionsByTitle}
          />
        );
      }}
    </Query>
  );
};

export default CollectionPageContainer;
