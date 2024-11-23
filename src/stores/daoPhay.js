export const findItemByCode = (items, code) => items.find((item) => item.code === code);

export const findSpecByCode = (specs, code) => {
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

export const findSpecTypeRByCode = (specs, code) => {
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
