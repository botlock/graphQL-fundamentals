import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { GET_USER } from "../App";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      name
      id
    }
  }
`;

export function NewUserForm() {
  const [name, setName] = useState("");
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      return;
    }

    if (!error) {
      await createUser({
        variables: {
          name,
        },
        refetchQueries: [GET_USER]
      });

      if (loading) {
        return <p>Aguarde...</p>;
      }

      console.log(data);
    } else {
      console.log("Algo deu errado");
    }
  }
  return (
    <>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
