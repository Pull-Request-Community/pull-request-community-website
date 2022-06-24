import React, {useState} from 'react';
import ProjectPage from '../components/projectPage/projectPage';
import Layout from '../components/layout/layout';
import {wrapper} from "../store/store";
import {receivedProjects} from "../store/projectsSlice";
import {getUsers} from "../services/user";

export default function vast(props) {
  const [currentHeight, setCurrentHeight] = useState(0);
  console.log(props);

  return (
    <Layout descriptionText={ProjectPage()}>
      <h1>projects</h1>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      const data = await getUsers();
      store.dispatch(receivedProjects(data));
      return { props: { projects: store.getState() } };
    }
)