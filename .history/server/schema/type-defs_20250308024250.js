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
        # create the query for movies here
        # create query for getting a movie by name
    }

    
    input CreateUserInput{

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
        createUser(user:CreateUserInput!): User
        # create update user mutation here using inputs :)
        updateUsername(input: UpdateUsernameInput!):User
        # create delete user mutation here
        deleteUser(id:ID!): User
    }

    enum Nationality{
        BRAZIL
        CANADA
        CHILE
        GERMANY
        INDIA 
    }
`;
export default typeDefs;