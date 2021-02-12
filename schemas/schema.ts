const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const BudgetType = new GraphQLObjectType({
    name: 'Budget',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        user_id: { type: GraphQLInt },
    })
});