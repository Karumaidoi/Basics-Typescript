import React, { useState } from "react";

interface PersonObj {
  name: string;
  email: string;
  age: number;
  country: string;
  region: string;
  roles: string[];
  variant: object;
  isLoading: boolean;
}

function isEmpty(obj: object): boolean {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const Person: React.FC<PersonObj> = ({
  name,
  email,
  age,
  roles,
  variant,
  isLoading,
}) => {
  console.log(isEmpty(variant));

  const [cash, setCash] = useState<number | null>(1);

  console.log(cash);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>
      {roles?.map((role, index) => (
        <p
          key={index}
          onClick={() => {
            setCash((x) => x! + index);
          }}
        >
          {role}
        </p>
      ))}
    </div>
  );
};

export default Person;
