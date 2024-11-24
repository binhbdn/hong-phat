export const findItemByCode = (items, code) => items.find((item) => item.code === code);

export const findSpecDDLByCode = (specs, code) => {
  const spec = specs.find((item) => item.code === code);
  if (!spec) return [];

  const list = spec.data.map((item) => ({
    dim: `D${item[0]}*D${item[1]}*${item[3]}`,
    bladeDiameter: item[0],
    handleDiameter: item[1],
    cuttingLength: item[2],
    overallLength: item[3]
  }));

  return list;
};

export const findSpecDDLAByCode = (specs, code) => {
  const spec = specs.find((item) => item.code === code);
  if (!spec) return [];

  const list = spec.data.map((item) => ({
    dim: `D${item[0]}*D${item[1]}*${item[3]}*${item[4]}`,
    bladeDiameter: item[0],
    handleDiameter: item[1],
    cuttingLength: item[2],
    overallLength: item[3],
    noseAngle: item[4]
  }));

  return list;
};

export const findSpecDLAByCode = (specs, code) => {
  const spec = specs.find((item) => item.code === code);
  if (!spec) return [];

  const list = spec.data.map((item) => ({
    dim: `D${item[0]}*${item[2]}*${item[3]}`,
    bladeDiameter: item[0],
    handleDiameter: item[1],
    overallLength: item[2],
    noseAngle: item[3]
  }));

  return list;
};

export const findSpecRDLByCode = (specs, code) => {
  const spec = specs.find((item) => item.code === code);
  if (!spec) return [];

  const list = spec.data.map((item) => ({
    dim: `R${item[0]}*D${item[1]}*${item[3]}`,
    bladeRadius: item[0],
    handleDiameter: item[1],
    cuttingLength: item[2],
    overallLength: item[3]
  }));

  return list;
};

export const findSpecDRDLByCode = (specs, code) => {
  const spec = specs.find((item) => item.code === code);
  if (!spec) return [];

  const list = spec.data.map((item) => ({
    dim: `D${item[0]}*R${item[1]}*D${item[2]}*${item[4]}`,
    bladeDiameter: item[0],
    bladeRadius: item[1],
    handleDiameter: item[2],
    cuttingLength: item[3],
    overallLength: item[4]
  }));

  return list;
};
