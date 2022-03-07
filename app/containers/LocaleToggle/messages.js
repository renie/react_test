import { defineMessages } from 'react-intl';

export const scope = 'reactTest.containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  de: {
    id: `${scope}.pt-br`,
    defaultMessage: 'pr-br',
  },
});
