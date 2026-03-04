import { gql } from "apollo-server";
const typeDefs = gql` 

   type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }



    type Query { 
        getAllUsers: [User!]!
        user(id: ID!): User!
    }

    
    # create user input:
    input CreateUserInput{
       #write your ccode here

        name: String!
        username: String!
        age: Int!
        nationality: Nationality = BRAZIL
    }

    input UpdateUsernameInput{ 
        id:ID!
        newUsername: String!
    
}

    type Mutation{
       #write your code here: createUser mutation with CreateUserInput as argument and return type User
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!):User
        deleteUser(id: ID!): User
    }
    enum Nationality{
        BRAZIL
        CANADA
        CHILE
        GERMANY
        INDIA 
        EGYPT
    }
`;
export default typeDefs;