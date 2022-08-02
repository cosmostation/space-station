import GA from 'react-ga4';

type TrackPayload = { [key: string]: any };

export const initGA = (): void => {
  if (process.env.REACT_APP_GA) {
    GA.initialize(process.env.REACT_APP_GA);
  }
};

/**
 * @param pageName The Page name
 * @param title The Page title
 */
export const pageView = (pageName: string, title?: string, trackPayload?: TrackPayload): void => {
  if (process.env.REACT_APP_GA) {
    GA.send({ hitType: 'pageview', page: pageName, title, ...trackPayload });
  }
};

/**
 * @param category The Event Category. Like Component name. (ex. AD, DashboardAd, ...)
 * @param action The Action Type. (ex. click, impression, close, search, ...)
 * @param label The Event Label. Values like link (ex. Price, Volume, https://rizon.world/ , ...)
 */
export const eventGA = (category: string, action: string, label: string, trackPayload?: TrackPayload): void => {
  if (process.env.REACT_APP_GA) {
    GA.event({
      category,
      action,
      label,
      ...trackPayload
    });
  }
};

export const clickEvent = (category: string, label: string, trackPayload?: TrackPayload): void => {
  eventGA(category, 'click', label, trackPayload);
};

export const impressionEvent = (category: string, label: string, trackPayload?: TrackPayload): void => {
  eventGA(category, 'impression', label, trackPayload);
};
