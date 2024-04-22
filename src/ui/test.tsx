import React from "react";

interface PersonObj {
  name: string;
  email: string;
  age: number;
  country: string;
  region: string;
  roles: string[];
}

const Person: React.FC<PersonObj> = ({ name, email, age, roles }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>
      {roles?.map((role, index) => (
        <p key={index}>{role}</p>
      ))}
    </div>
  );
};

export default Person;
