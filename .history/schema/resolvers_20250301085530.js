import UserList from "../mock.js";
import _ from "lodash";

const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (args) => {
            const id = args.id;
            return UserList.find((user) => user.id === parseInt(id));
        }
    },
    Mutation: {
        createUser: (args) => {
            const user = args.user
            const LastId = UserList[UserList.length - 1].id
            const newUser = {
                id: LastId + 1,
                ...user
            }
            UserList.push(newUser)
            return newUser
        },
        //create update user mutation here

        //create delete user mutation here
    },
}


export default resolvers;