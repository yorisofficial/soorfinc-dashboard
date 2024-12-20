export type PartnerProps = {
  id: string;
  fullName: string;
  slug: string;
  email: string;
  phone: string;
  birthdate: string;
  partnership: string[];
  description: string;
};

export const dataPartner: PartnerProps[] = [
  {
    id: "1",
    fullName: "John Doe",
    slug: "jhon-doe",
    birthdate: "12 januari 2024",
    email: "john@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
  },
  {
    id: "2",
    fullName: "John Smith",
    slug: "jhon-smith",
    birthdate: "12 januari 2024",
    email: "john.smith@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
  },
  {
    id: "3",
    fullName: "Jane Doe",
    slug: "jane-doe",
    birthdate: "12 januari 2024",
    email: "jane.doe@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
  },
  {
    id: "4",
    fullName: "Bob Smith",
    slug: "bob-smith",
    birthdate: "12 januari 2024",
    email: "bob.smith@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
  },
  {
    id: "5",
    fullName: "Alice Doe",
    slug: "alice-doe",
    birthdate: "12 januari 2024",
    email: "alice.doe@example.com",
    phone: "08123456789",
    partnership: ["surf-coach", "surf-lesson"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque rerum nesciunt natus eius ducimus minus quaerat temporibus, voluptas, veritatis dignissimos ipsum culpa quis quidem sequi illum cupiditate rem illo vel repudiandae.",
  },
];
