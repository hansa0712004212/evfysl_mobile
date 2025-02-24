import { COLOR_AMBER, COLOR_BLACK, COLOR_BLUE_LIGHT, COLOR_BUTTON_SECONDARY, COLOR_ERROR, COLOR_GRAY, COLOR_GREEN, COLOR_SUCCESS, COLOR_WHITE_SEMI } from './EvfyColors';

export const DEFAULT_ICON_SIZE = 40;
export const DEFAULT_MARGIN_SIZE = 20;
export const DEFAULT_SHADOW_RADIUS = 6;
export const DEFAULT_SHADOW_RADIUS_CHIP = 3;
export const DEFAULT_PADDING_VERTICAL_SIZE = 10;
export const DEFAULT_BORDER_RADIUS_SMALL = 6;
export const DEFAULT_BORDER_RADIUS_LARGE = 20;

export const PASSWORD_LENGTH_MAX = 50;
export const PASSWORD_LENGTH_MIN = 8;
export const OTP_LENGTH = 6;

export const TOUCHABLE_ACTIVE_OPACITY = 0.8;

export const DEFAULT_LATITUDE = 6.8909792;
export const DEFAULT_LONGITUDE = 79.9173462;

export const THEME_RED = 'red';
export const THEME_BLUE = 'blue';
export const THEME_GREEN = 'green';

// export const THEME_BLACK = 'black';
// export const THEME_PINK = 'pink';
// export const THEME_YELLOW = 'yellow';
// export const THEME_ORANGE = 'orange';

export const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: 'සිංහල', value: 'si' },
  { label: 'தமிழ்', value: 'ta' },
  { label: 'हिन्दी', value: 'hi' },
  { label: '中文', value: 'cn' },
  { label: 'Русский', value: 'ru' }
];

export const REGEX = {
  name: /^[a-z ,.'-]+$/i,
  email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};

export const ALERT_TYPE_INFO = 'info';
export const ALERT_TYPE_ERROR = 'error';
export const ALERT_TYPE_INPUT = 'input';
export const ALERT_TYPE_WARNING = 'warn';
export const ALERT_TYPE_DANGER = 'danger';
export const ALERT_TYPE_SUCCESS = 'success';
export const ALERT_TYPE_INPUT_DELETE = 'inputDelete';
export const ALERT_TYPE_CONFIRMATION = 'confirmation';

export const URL_TERMS_N_CONDITION = 'https://www.google.com/search?q=hansa+amarasekara';

export const CHARGER_STATUS_AVAILABLE = 'AVAILABLE';
export const CHARGER_STATUS_OCCUPIED = 'OCCUPIED';

export const CURRENT_TYPES = [
  { id: 'dc', name: 'L3 Fast ⚡', description: 'Direct Current', iconName: 'current-dc' },
  { id: 'ac', name: 'L1, L2 Slow ⚡', description: 'Alternate Current', iconName: 'current-ac' }
] as const;

export const VENDORS = [
  { id: 1, unique: 'chargeNet', name: 'ChargeNet', web: '', hotline: '' },
  { id: 2, unique: 'volt', name: 'Volt Charge', web: '', hotline: '' },
  { id: 3, unique: 'slam', name: 'S. L. A. M.', web: '', hotline: '' },
  { id: 4, unique: 'mev', name: 'MEV', web: '', hotline: '' },
  { id: 9999, unique: 'non', name: 'Non Networked', web: '', hotline: '' }
] as const;

export const PLUGS = [
  { id: 'CHAdeMO', currentType: 'dc', name: 'CHAdeMO', iconName: 'ev-plug-chademo', gun: true },
  { id: 'CCS1', currentType: 'dc', name: 'CSS1', iconName: 'ev-plug-ccs1', gun: true },
  { id: 'CCS2', currentType: 'dc', name: 'CSS2', iconName: 'ev-plug-ccs2', gun: true },
  { id: 'Tesla', currentType: 'dc', name: 'Tesla', iconName: 'ev-plug-tesla', gun: true },
  { id: 'GBT', currentType: 'dc', name: 'GB/T', iconName: 'dots-hexagon', gun: true },
  { id: 'T1', currentType: 'ac', name: 'Type 1', iconName: 'ev-plug-type1', gun: true },
  { id: 'T2', currentType: 'ac', name: 'Type 2', iconName: 'ev-plug-type2', gun: true },
  { id: 'BS1363', currentType: 'ac', name: 'UK 13A', iconName: 'power-socket-uk', gun: false },
  { id: 'Industrial', currentType: 'ac', name: 'Industrial', iconName: 'google-circles-communities', gun: false },
  { id: 'GbtSlow', currentType: 'ac', name: 'GB/T AC', iconName: 'ev-plug-type2', gun: true }
] as const;

export const CONTACT_CONNECT = [
  { iconName: 'facebook', iconColor: COLOR_BUTTON_SECONDARY, shadowColor: COLOR_BLUE_LIGHT, url: 'https://web.facebook.com/profile.php?id=61565457552199' },
  { iconName: 'youtube', iconColor: COLOR_ERROR, shadowColor: COLOR_BLACK, url: 'https://www.youtube.com/@KonnweiSriLanka' },
  { iconName: 'close', iconColor: COLOR_BLACK, shadowColor: COLOR_WHITE_SEMI, url: 'https://x.com/realdonaldtrump' },
  { iconName: 'instagram', iconColor: COLOR_ERROR, shadowColor: COLOR_AMBER, url: 'https://www.instagram.com/robertdowneyjr' },
  { iconName: 'github', iconColor: COLOR_BLACK, shadowColor: COLOR_GRAY, url: 'https://github.com/hansa0712004212' },
  { iconName: 'whatsapp', iconColor: COLOR_GREEN, shadowColor: COLOR_SUCCESS, url: 'https://wa.me/94712004212' }
];
