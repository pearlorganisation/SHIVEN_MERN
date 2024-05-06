const roleValues = {
  ADMIN: 0,
  CONSULTANT: 1,
  CUSTOMER: 2,
};
const reverseRoleValues = {
  0: "ADMIN",
  1: "CONSULTANT",
  2: "CUSTOMER",
};

export const roleChecker = (role) => {
  return roleValues[role];
};

export const reverseRoleChecker = (role) => {
  return reverseRoleValues[role];
};
