import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import styled from 'styled-components';

const PropName = styled.strong`
  background: #0d6efd;
  color: #fff;
  font-weight: bold;
  height: 100%;
  line-height: 3em;
  padding: 0 0.5em;
  flex: 1.5;
`;

const PropDesc = styled.p`
  margin: 0;
  background: #fff;
  flex: 1;
  padding: 0 0.5em;
`;

function DataList({ loading, error, data }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (data !== false) {
    const formattedList = [];

    Object.entries(data).forEach(prop =>
      formattedList.push(
        <>
          <PropName>{prop[0]}</PropName>
          <PropDesc>{prop[1]}</PropDesc>
        </>,
      ),
    );
    return <List items={formattedList} component={ListItem} />;
  }

  return null;
}

DataList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
};

export default DataList;
