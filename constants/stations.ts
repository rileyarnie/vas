type Stop = {
  id: number;
  name: string;
  speed: string;
  direction: string;
  train: boolean;
};
export type StationType = {
  id: number;
  name: string;
  stops: Stop[];
};

const stations: StationType[] = [
  {
    id: 1,
    name: "NRB - EKV",
    stops: [
      {
        id: 1.1,
        name: "NCS",
        speed: "10 Km/hr 8",
        direction: "top",
        train: true,
      },
      {
        id: 1.2,
        name: "DON",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
      {
        id: 1.3,
        name: "MKR",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
      {
        id: 1.4,
        name: "PPL",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
      {
        id: 1.5,
        name: "NCS",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
    ],
  },
  {
    id: 2,
    name: "NCS - SYK",
    stops: [
      {
        id: 2.1,
        name: "NCS",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
      {
        id: 2.2,
        name: "MKR",
        speed: "20 Km/hr 8",
        direction: "top",
        train: false,
      },
      {
        id: 2.3,
        name: "IMR",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
      {
        id: 2.4,
        name: "EKS",
        speed: "10 Km/hr 8",
        direction: "bottom",
        train: false,
      },
      {
        id: 2.5,
        name: "SGR",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
      {
        id: 2.6,
        name: "SYK",
        speed: "10 Km/hr 8",
        direction: "top",
        train: false,
      },
    ],
  },
];

export default stations;
