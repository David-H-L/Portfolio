export const currentHoliday = () => {
  const currentDate = new Date();
  const formatDate = new Intl.DateTimeFormat("es-BO", {
    timeZone: "America/La_Paz",
    month: "long"
  });
  return formatDate.format(currentDate);
}

export const ambientMusic = () => {
  let ambient = "";
  
  if(currentHoliday() === "octubre") {
    ambient = "/music/halloween.mp3";
  }else if(currentHoliday() === "diciembre") {
    ambient = "/music/christmas.mp3";
  }
  return ambient;
}