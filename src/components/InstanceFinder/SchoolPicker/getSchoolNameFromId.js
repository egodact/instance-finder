import instances from '../../../instances.json';

const getSchoolNameFromId = schoolId =>
  instances.schools.find(school => school.id === schoolId).name;

export default getSchoolNameFromId;
