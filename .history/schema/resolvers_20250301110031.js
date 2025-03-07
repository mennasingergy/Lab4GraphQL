import UserList from "../mock.js";
import _ from "lodash";

const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (_,args) => {
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
        updateUser: (_,args) => {
            const { id, newUsername } = args.user
            const user = UserList.find((user) => user.id === parseInt(id))
            user.username = newUsername
            return user
        },
        deleteUser: (args) => {
            const id = args.id
            const user = UserList.find((user) => user.id === parseInt(id))
            // UserList.filter((user) => user.id !== parseInt(id))
            _.remove(UserList, (user) => user.id === parseInt(id))
            return user
        }
        //create delete user mutation here
    },
}


export default resolvers;