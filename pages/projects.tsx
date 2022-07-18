import next from 'next';
import Navbar from '../components/layout/navbar/navbar';
import style from '../styles/projects.module.scss';
import React, { useEffect, useState } from 'react';
import ProjectPage from '../components/projectPage/projectPage';
import Layout from '../components/layout/layout';
import { receivedProjects } from '../store/projectsSlice';
import { getUsers } from '../services/user';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function Projects(props) {
  const [currentHeight, setCurrentHeight] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getUsers().then((products) => {
      //TODO: change call to getProjects
      dispatch(receivedProjects(products));
    });
  }, [dispatch]);

  const projects = useAppSelector((state) => state.projects.items);

  return (
    <Layout descriptionContent={<ProjectPage />}>
      <h1>projects</h1>
    </Layout>
  );
}
