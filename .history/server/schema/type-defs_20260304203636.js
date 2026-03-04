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
        users: [User!]!
        user(id: ID!): User!
    }

    
    //create 

    input UpdateUsernameInput{ 
        id:ID!
        newUsername: String!
    
}

    type Mutation{
        createUser(user:CreateUserInput!): User
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