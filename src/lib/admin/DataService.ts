export type PropsService = {
  idService: string;
  title: string;
  partnerId: string;
  slugPartner: string;
  price: number;
  description: string;
  session: SessionService[];
};

export type SessionService = {
  idSession: string;
  title: string;
  time: string;
};

export const DataServices: PropsService[] = [
  {
    idService: "2e2fb55a5bd5",
    partnerId: "1",
    slugPartner: "jhon-doe",
    title: "Service 1",
    price: 100000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
    session: [
      {
        idSession: "90",
        title: "session 1",
        time: "06:00 - 07:00",
      },
      {
        idSession: "90",
        title: "session 2",
        time: "07:00 - 08:00",
      },
      {
        idSession: "90",
        title: "session 3",
        time: "08:00 - 09:00",
      },
      {
        idSession: "90",
        title: "session 4",
        time: "09:00 - 10:00",
      },
      {
        idSession: "90",
        title: "session 5",
        time: "10:00 - 11:00",
      },
    ],
  },
  {
    idService: "cd5c60dbd5ac",
    partnerId: "1",
    slugPartner: "jhon-doe",
    title: "Service 1",
    price: 100000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
    session: [
      {
        idSession: "1201",
        title: "session 1",
        time: "06:00 - 07:00",
      },
      {
        idSession: "1202",
        title: "session 3",
        time: "08:00 - 09:00",
      },
      {
        idSession: "1203",
        title: "session 4",
        time: "09:00 - 10:00",
      },
      {
        idSession: "1204",
        title: "session 5",
        time: "10:00 - 11:00",
      },
    ],
  },
  {
    idService: "2",
    partnerId: "2",
    slugPartner: "jhon-smith",
    title: "Service 2",
    price: 200000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
    session: [
      {
        idSession: "90",
        title: "session 1",
        time: "06:00 - 07:00",
      },
      {
        idSession: "90",
        title: "session 2",
        time: "07:00 - 08:00",
      },
      {
        idSession: "90",
        title: "session 3",
        time: "08:00 - 09:00",
      },
      {
        idSession: "90",
        title: "session 4",
        time: "09:00 - 10:00",
      },
      {
        idSession: "90",
        title: "session 5",
        time: "10:00 - 11:00",
      },
    ],
  },
  {
    idService: "3",
    partnerId: "3",
    slugPartner: "jane-doe",
    title: "Service 3",
    price: 300000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
    session: [
      {
        idSession: "90",
        title: "session 1",
        time: "06:00 - 07:00",
      },
      {
        idSession: "90",
        title: "session 2",
        time: "07:00 - 08:00",
      },
      {
        idSession: "90",
        title: "session 3",
        time: "08:00 - 09:00",
      },
      {
        idSession: "90",
        title: "session 4",
        time: "09:00 - 10:00",
      },
      {
        idSession: "90",
        title: "session 5",
        time: "10:00 - 11:00",
      },
    ],
  },
];
