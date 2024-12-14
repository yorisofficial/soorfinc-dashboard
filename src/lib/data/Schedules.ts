export interface SchedulesProps {
  id: string;
  booking: string;
  picture: string;
  fullName: string;
  gender: string;
  age: number;
  phone: string;
  email: string;
  session: string;
  date: string;
  time: string;
  status: string;
  note: string;
}

export const AllSchedules: SchedulesProps[] = [
  {
    id: "schedule-1",
    booking: "booking-1",
    picture: "/Dummy/profile-picture.png",
    fullName: "John Doe",
    gender: "male",
    age: 25,
    phone: "08123456789",
    email: "m9KcU@example.com",
    session: "session-1",
    date: "2022-01-01",
    time: "10:00",
    status: "success",
    note: "",
  },
  {
    id: "schedule-2",
    booking: "booking-2",
    picture: "/Dummy/profile-picture.png",
    fullName: "John Doe",
    gender: "male",
    age: 25,
    phone: "08123456789",
    email: "m9KcU@example.com",
    session: "session-1",
    date: "2022-01-01",
    time: "10:00",
    status: "pending",
    note: "",
  },
  {
    id: "schedule-3",
    booking: "booking-3",
    picture: "/Dummy/profile-picture.png",
    fullName: "John Doe",
    gender: "male",
    age: 25,
    phone: "08123456789",
    email: "m9KcU@example.com",
    session: "session-1",
    date: "2022-01-01",
    time: "10:00",
    status: "cancel",
    note: "",
  },
  {
    id: "schedule-4",
    booking: "booking-4",
    picture: "/Dummy/profile-picture.png",
    fullName: "John Doe",
    gender: "male",
    age: 25,
    phone: "08123456789",
    email: "m9KcU@example.com",
    session: "session-1",
    date: "2022-01-01",
    time: "10:00",
    status: "pending",
    note: "",
  },
];
