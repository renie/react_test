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
  makeSelectTickerList,
  makeSelectLoadingTickerList,
} from 'containers/App/selectors';
import reducer from 'containers/App/reducer';
import DataList from 'components/DataList';
import LoadingIndicator from 'components/LoadingIndicator';
import { Combo } from './Combo';
import { Heading } from './Heading';
import messages from './messages';
import { loadTicker, changeTicker, loadTickerList } from '../App/actions';
import saga from './saga';

const key = 'home';

export function HomePage({
  selectedticker,
  loading,
  error,
  data,
  loadingTickerList,
  tickerList,
  onSubmitForm,
  onChangeTicker,
  onPageLoad,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (selectedticker && selectedticker.trim().length > 0) {
      onSubmitForm();
      onPageLoad();
    }
  }, []);

  const tickerDataProps = {
    loading,
    error,
    data,
  };

  return (
    <>
      <Heading>
        <FormattedMessage {...messages.header} />
      </Heading>
      {loadingTickerList && <LoadingIndicator />}
      {!loadingTickerList && (
        <Combo defaultValue={selectedticker} onChange={onChangeTicker}>
          {tickerList.map(item => (
            <option key={item} value={`t${item}`}>
              {item}
            </option>
          ))}
        </Combo>
      )}
      <DataList {...tickerDataProps} />
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  selectedticker: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onPageLoad: PropTypes.func,
  onChangeTicker: PropTypes.func,
  loadingTickerList: PropTypes.bool,
  errorTickerList: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  tickerList: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  selectedticker: makeSelectTicker(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  loadingTickerList: makeSelectLoadingTickerList(),
  tickerList: makeSelectTickerList(),
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
    onPageLoad: () => {
      dispatch(loadTickerList());
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
