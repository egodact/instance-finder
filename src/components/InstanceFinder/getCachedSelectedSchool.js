import instances from '../../instances.json';

const getCachedSelectedSchool = () => {
  const selectedSchoolInCache = localStorage.getItem('selected-school');

  const validSchoolIds = instances.schools.map(school => school.id);
  if (!validSchoolIds.includes(selectedSchoolInCache)) {
    return null;
  }

  return selectedSchoolInCache;
};

export default getCachedSelectedSchool;
