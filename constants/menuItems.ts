import TrainIcon from "/public/assets/icons/train-solid.svg";
import FileIcon from "/public/assets/icons/file-lines-solid.svg";
import ChartIcon from "/public/assets/icons/chart-line-solid.svg";
import BoltIcon from "/public/assets/icons/bolt-lightning-solid.svg";
import CircleIcon from "/public/assets/icons/circle-plus-solid.svg";
import ClipboardIcon from "/public/assets/icons/clipboard-check-solid.svg";
import UsersIcon from "/public/assets/icons/users-solid.svg";
import WrenchIcon from "/public/assets/icons/wrench-solid.svg";
import ShieldIcon from "/public/assets/icons/shield-halved-solid.svg";
import SettingsIcon from "/public/assets/icons/gear-solid.svg";

type MenuItem = {
  id: number;
  label: string;
  iconUrl: any;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "OCC Dashboard",
    iconUrl: TrainIcon,
  },
  {
    id: 2,
    label: "Train Journey Log",
    iconUrl: FileIcon,
  },
  {
    id: 3,
    label: "Line Manager",
    iconUrl: ChartIcon,
  },
  {
    id: 4,
    label: "Stations Manager",
    iconUrl: BoltIcon,
  },
  {
    id: 5,
    label: "Section blocks",
    iconUrl: CircleIcon,
  },
  {
    id: 6,
    label: "Inspection Logs",
    iconUrl: ClipboardIcon,
  },
  {
    id: 7,
    label: "OBC Manager",
    iconUrl: UsersIcon,
  },
  {
    id: 8,
    label: "Track Inspectors",
    iconUrl: WrenchIcon,
  },
  {
    id: 9,
    label: "System Administrators",
    iconUrl: ShieldIcon,
  },
  {
    id: 10,
    label: "System Settings",
    iconUrl: SettingsIcon,
  },
];

export default menuItems;
