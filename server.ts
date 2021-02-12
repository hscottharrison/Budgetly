import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import cors from 'cors';

import typeDefs from './schemas/categories';
import models, { sequelize } from './models';
import resolvers from './resolvers';

const app = express();

app.use(cors());

const server = new ApolloServer({typeDefs, resolvers, context: () => ({ models })});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(async () => {
    httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
