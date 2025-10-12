export const currentHoliday = () => {
  const currentDate = new Date();
  const formatDate = new Intl.DateTimeFormat("es-BO", {
    timeZone: "America/La_Paz",
    month: "long"
  });
  return formatDate.format(currentDate);
}
