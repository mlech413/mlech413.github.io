import React from 'react';
import './Skills.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';
import react from '../../../../../images/icons/react.png';
import html from '../../../../../images/icons/html.png';
import css from '../../../../../images/icons/css.png';
import javascript from '../../../../../images/icons/javascript.png';
import jquery from '../../../../../images/icons/jquery.png';
import ajax from '../../../../../images/icons/ajax.png';
import handlebars from '../../../../../images/icons/handlebars.png';
import sql from '../../../../../images/icons/sql.png';
import node from '../../../../../images/icons/node.png';
import express from '../../../../../images/icons/express.png';
import mongodb from '../../../../../images/icons/mongodb.png';
import mysql from '../../../../../images/icons/mysql.png';
import firebase from '../../../../../images/icons/firebase.png';
import git from '../../../../../images/icons/git.png';
import heroku from '../../../../../images/icons/heroku.png';
import restful_api from '../../../../../images/icons/restful_api.png';
import bootstrap from '../../../../../images/icons/bootstrap.png';
import sequelize from '../../../../../images/icons/sequelize.png';
import mvc from '../../../../../images/icons/mvc.png';
import responsiveDesign from '../../../../../images/icons/responsive-design.png';
import cobol from '../../../../../images/icons/cobol.png';
import jcl from '../../../../../images/icons/jcl.png';
import db2 from '../../../../../images/icons/db2.png';
import cics from '../../../../../images/icons/cics.png';
import vsam from '../../../../../images/icons/vsam.png';
import tso from '../../../../../images/icons/tso.png';
import ispf from '../../../../../images/icons/ispf.png';
import oracle from '../../../../../images/icons/oracle.png';
import zos from '../../../../../images/icons/zos.png';
import mvs from '../../../../../images/icons/mvs.png';
import machineLearning from '../../../../../images/icons/machine-learning.png';
import neuralNetworks from '../../../../../images/icons/neural-networks.png';
import python from '../../../../../images/icons/python.png';
import numpy from '../../../../../images/icons/numpy.png';
import scipy from '../../../../../images/icons/scipy.png';
import pandas from '../../../../../images/icons/pandas.png';
import matplotlib from '../../../../../images/icons/matplotlib.png';
import postgresql from '../../../../../images/icons/postgresql.png';
import flask from '../../../../../images/icons/flask.png';
import api from '../../../../../images/icons/api.png';
import tableau from '../../../../../images/icons/tableau.png';
import leaflet from '../../../../../images/icons/leaflet.png';
import etl from '../../../../../images/icons/etl.png';
import scikitLearn from '../../../../../images/icons/scikit-learn.png';
import tensorflow from '../../../../../images/icons/tensorflow.png';
import pytorch from '../../../../../images/icons/pytorch.png';
import r from '../../../../../images/icons/r.png';
import deepLearning from '../../../../../images/icons/deep-learning.png';


const SkillsSection = ({frontEnd, backEnd, other}) => {
  return (
    <section id="skills">
                            
      <Container>

        <Grid container>

           <Grid item xs={12} sm={6}>

           <img className='icon' 
                src={python} 
                alt={'Python'}
              ></img>

           <img className='icon' 
                src={pandas} 
                alt={'Pandas'}
                ></img>

           <img className='icon'
                src={r} 
                alt={'R'}
              ></img>

            <img className='icon'
                src={tableau} 
                alt={'Tableau'}
               ></img>

            <img className='icon'
                src={machineLearning} 
                alt={'Machine Learning'}
              ></img>

           </Grid>

           <Grid item xs={12} sm={6}>

           <img className='icon'
                src={neuralNetworks} 
                alt={'Neural Networks'}
                ></img>

           <img className='icon'
                src={deepLearning} 
                alt={'Deep Learning'}
               ></img>

          <img className='icon' 
                src={tensorflow} 
                alt={'TensorFlow'}
              ></img>

            <img className='icon' 
                src={pytorch} 
                alt={'PyTorch'}
              ></img>

            <img className='icon'
                src={etl} 
                alt={'ETL'}
              ></img>

          </Grid> 


        </Grid>

        <Grid container>

           <Grid item xs={12} sm={6}>


           <img className='icon'
                src={sql} 
                alt={'SQL'}
              ></img>

            <img className='icon' 
                src={postgresql} 
                alt={'PostgreSQL'}
              ></img>

            <img className='icon' 
                src={mysql} 
                alt={'MySQL'}
              ></img>

<           img className='icon'
                src={mongodb} 
                alt={'MongoDB'}
              ></img>

            <img className='icon'
                src={oracle} 
                alt={'Oracle'}
                ></img>

          </Grid>

          <Grid item xs={12} sm={6}>
                <img className='icon'
                src={db2} 
                alt={'DB2'}
                ></img>

            <img className='icon'
                src={cobol} 
                alt={'COBOL'}
                ></img>

            <img className='icon'
                src={jcl} 
                alt={'JCL'}
                ></img>

            <img className='icon' 
                src={heroku} 
                alt={'Heroku'}
              ></img>

            <img className='icon' 
                src={git} 
                alt={'Git'}
              ></img>

          </Grid>
          

        </Grid>

        <Grid container>

           <Grid item xs={12} sm={6}>

           <img className='icon'
                src={numpy} 
                alt={'NumPy'}
                ></img>

            <img className='icon' 
                src={scipy} 
                alt={'SciPy'}
              ></img>
           
           <img className='icon' 
                src={scikitLearn} 
                alt={'Scikit Learn'}
              ></img>

            <img className='icon' 
                src={matplotlib} 
                alt={'Matplotlib'}
              ></img>

            <img className='icon' 
                  src={leaflet} 
                  alt={'Leaflet'}
                ></img>
            
          </Grid>

          <Grid item xs={12} sm={6}>

            <img className='icon'
                src={flask} 
                alt={'Flask'}
                ></img>

            <img className='icon' 
                src={api} 
                alt={'API'}
              ></img>

            <img className='icon'
                src={html} 
                alt={'HTML'}
               ></img>

            <img className='icon'
                src={css} 
                alt={'CSS'}
                ></img>

            <img className='icon' 
                src={javascript} 
                alt={'JavaScript'}
              ></img>

          </Grid>
          

        </Grid>

      </Container>
      
    </section>
  );
}

export default SkillsSection;