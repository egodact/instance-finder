const sortSchools = (schoolA, schoolB) => {
  const aName = schoolA.name.toLowerCase();
  const bName = schoolB.name.toLowerCase();
  return aName < bName ? -1 : aName > bName ? 1 : 0;
};

export default sortSchools;
