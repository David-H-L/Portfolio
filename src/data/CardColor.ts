import { currentHoliday } from "./CurrentHoliday";

export const cardColor = () => {
    let color = "";
    switch (currentHoliday()) {
    
    case 'octubre':
        color = 'bg-black/50';
        break;
    default:
        color = 'bg-sky-500/10';
        break;
    }
    return color;    
}