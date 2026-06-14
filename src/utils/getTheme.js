import { clinicInfo } from "../config/clinic";
import { themes } from "../config/theme";

export const getTheme = () => {
  return themes[clinicInfo.theme] || themes.classic;
};