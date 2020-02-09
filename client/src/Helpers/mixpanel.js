import mixpanel from 'mixpanel-browser';

mixpanel.init(`${process.env.REACT_APP_MXIPANEL_KEY}`);

export default mixpanel;