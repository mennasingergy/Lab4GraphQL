import UserList from "../mock.js";
import _ from "lodash";

const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (_, args) => {
            const id = args.id;
            return UserList.find((user) => user.id === parseInt(id));
        },
         // MOVIE RESOLVERS
       movies: () => {
        return MovieList;
      },
      movie: (parent, args) => {
        const name = args.name;
        const movie = _.find(MovieList, { name });
        return movie;
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
        updateUsername(parent, args) {
            let updateduser;
            const { id, newUsername } = args.input
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername;
                    updateduser = user
                }

            });
            return updateduser;
        },
        //create delete user mutation here
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
        },

    },
}
}


export default resolvers;