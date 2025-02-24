import LocalizedStrings from 'react-localization';
import english from './EvfyEnglish';
import hindi from './EvfyHindi';
import mandarin from './EvfyMandarin';
import russian from './EvfyRussian';
import sinhala from './EvfySinhala';
import tamil from './EvfyTamil';

export default new LocalizedStrings({
  'en': english,
  'si': sinhala,
  'cn': mandarin,
  'hi': hindi,
  'ru': russian,
  'ta': tamil
});