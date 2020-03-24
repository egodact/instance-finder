const buildUrl = (schoolId, platformType) =>
  `https://${schoolId}.egodact.app/${platformType.toLowerCase()}`;

export default buildUrl;
