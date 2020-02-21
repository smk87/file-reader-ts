export const dateStringToDate = (dateString: string): Date => {
  const datePart = dateString.split("/").map((datePart: string): number => {
    return parseInt(datePart);
  });

  return new Date(datePart[2], datePart[1] - 1);
};
