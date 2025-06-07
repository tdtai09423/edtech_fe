import { Menu } from "../../../common/configMenu";

export interface IMenuTab {
  label: string;
  to: string;
}
export const MenuTabItem: IMenuTab[] = [
  {
    label: "Tools",
    to: Menu.URL_SPEAKING_PAGE,
  },
  {
    label: "Resources",
    to: Menu.URL_VIEW_RESOURCES,
  },
  {
    label: "Scholarship",
    to: Menu.URL_STUDENT_PAGE,
  },
  {
    label: "Membership",
    to: Menu.URL_STUDENT_PAGE,
  },
];
