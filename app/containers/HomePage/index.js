import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
  makeSelectTicker,
} from 'containers/App/selectors';
import DataList from 'components/DataList';
import reducer from 'containers/App/reducer';
import messages from './messages';
import { loadTicker, changeTicker } from '../App/actions';
import saga from './saga';

const key = 'home';

export function HomePage({
  ticker,
  loading,
  error,
  data,
  onSubmitForm,
  onChangeTicker,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (ticker && ticker.trim().length > 0) onSubmitForm();
  }, []);

  const tickerListDataProps = {
    loading,
    error,
    data,
  };

  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="ticker">
          <input
            id="ticker"
            type="text"
            placeholder="tBTCUSD"
            value={ticker}
            onChange={onChangeTicker}
          />
        </label>
      </form>
      <DataList {...tickerListDataProps} />
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  ticker: PropTypes.string,
  onChangeTicker: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  ticker: makeSelectTicker(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTicker: evt => {
      dispatch(changeTicker(evt.target.value));
      dispatch(loadTicker());
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadTicker());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
