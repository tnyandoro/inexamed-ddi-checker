import React from 'react';
import SearchForm from "../SearchForm/index";
import AddedDrugs from "../AddedDrugs/index";
import classes from '../../App.module.css';

const Main = () => (
  <main className={classes.main}>
    <SearchForm />
    <AddedDrugs />
  </main>
);

export default Main;
