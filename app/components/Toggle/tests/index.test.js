import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider, defineMessages } from 'react-intl';

import Toggle from '../index';

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const defaultPtMessage = 'someOtherContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
      pt: {
        id: 'boilerplate.containers.LocaleToggle.pt',
        defaultMessage: defaultPtMessage,
      },
    });
    const { container } = render(
      <IntlProvider locale="en">
        <Toggle values={['en', 'pt']} messages={messages} />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not have ToggleOptions if props.values is not defined', () => {
    const { container } = render(<Toggle />);
    const elements = container.querySelectorAll('option');
    expect(elements).toHaveLength(1);
    expect(container.firstChild.value).toEqual('--');
  });
});
