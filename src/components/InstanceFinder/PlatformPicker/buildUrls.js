import PlatformTypes from './PlatformTypes';

const buildUrl = (schoolId, prefix) =>
  `https://${prefix}.${schoolId}.egodact.app`;

const buildUrls = schoolId => ({
  [PlatformTypes.CHALLENGEMONITOR]: buildUrl(schoolId, 'cm'),
  [PlatformTypes.PROGRESSMONITOR]: buildUrl(schoolId, 'pm')
});

export default buildUrls;
