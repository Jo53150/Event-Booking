const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema/index'); 
const resolvers = require('./graphql/resolvers/index'); 
const isAuth = require('./middleware/is-auth');


require('dotenv').config();


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, 
});

async function startServer() {
  await server.start();
  
  server.applyMiddleware({ app, path: '/graphql' });

  try {
    await mongoose.connect(process.env.MONGO_URI);
  
    app.listen(8000, () => {
      console.log('Server is running on http://localhost:8000/graphql');
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

startServer();
