const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        component: String!
        imageUrl: String!
        creator: User!
        creatorAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
        post: [Post]
    }

    type AuthData {
        token: String!
        userId: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery {
        login(email: String!, password: String!) : AuthData!
    }

    type RootMutation {
        createUser(userInput: UserInputData) : User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
