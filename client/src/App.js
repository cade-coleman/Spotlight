import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import EditProfile from "./pages/EditProfile";
import AddNewPost from './pages/AddNewPost';
import Notifications from "./pages/Notifications";
import SinglePost from "./pages/SinglePost";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container"></div>
          <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/account/editProfile" element={<EditProfile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path='/addPost' element={< AddNewPost />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:username" element={<Account />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/post/:postId" element={<SinglePost />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
