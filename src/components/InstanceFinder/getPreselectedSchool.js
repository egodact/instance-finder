import instances from '../../instances.json';
import getCachedSelectedSchool from './getCachedSelectedSchool';

const getPreselectedSchool = () => {
  const validSchoolIds = instances.schools.map(school => school.id);

  const preselectedSchool = window.preselectedSchool;
  if (preselectedSchool && validSchoolIds.includes(preselectedSchool)) {
    return preselectedSchool;
  }

  return getCachedSelectedSchool();
};

export default getPreselectedSchool;
