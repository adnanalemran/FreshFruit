{
  // Reference type for object
  type User = {
    companyName: "zaimah technologies"; // literal type
    firstName: string; // required
    middleName?: string; // optional
    lastName: string; // required
    readonly age: number; // read-only, cannot be changed
    isAdmin?: boolean; // optional
    address: {
      street: string;
      city: string;
      country: string;
    }; // nested object for address
    phoneNumbers?: string[]; // optional array of phone numbers
    skills: string[]; // array of strings representing skills
  };

  // Object type using the reference
  const user: User = {
    companyName: "zaimah technologies",
    firstName: "adnan",
    lastName: "khan",
    age: 23,
    isAdmin: true,
    address: {
      street: "123 Main St",
      city: "Dhaka",
      country: "Bangladesh",
    },
    phoneNumbers: ["+880123456789", "+880987654321"],
    skills: ["TypeScript", "React", "Node.js"],
  };
}
