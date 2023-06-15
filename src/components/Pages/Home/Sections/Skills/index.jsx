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

const SkillsSection = ({frontEnd, backEnd, other}) => {
  return (
    <section id="skills">
                            
      <Container>

        <Grid container>

           <Grid item xs={12} sm={6}>

             <img className='icon'
                src={cobol} 
                alt={'COBOL'}
                ></img>

                <img className='icon'
                src={db2} 
                alt={'DB2'}
                ></img>

                <img className='icon'
                src={oracle} 
                alt={'Oracle'}
                ></img>

                <img className='icon'
                src={cics} 
                alt={'CICS'}
                ></img>

                <img className='icon'
                src={jcl} 
                alt={'JCL'}
                ></img>
                
           </Grid>
          
           <Grid item xs={12} sm={6}>

           {/* <img className='icon'
                src={vsam} 
                alt={'VSAM'}
                ></img> */}

            <img className='icon'
                src={neuralNetworks} 
                alt={'Neural Networks'}
                ></img>

            <img className='icon'
                src={tso} 
                alt={'TSO'}
                ></img>

            <img className='icon' 
                src={ispf} 
                alt={'ISPF'}
              ></img>

            <img className='icon' 
                src={mvs} 
                alt={'MVS'}
              ></img>

            <img className='icon'
                src={zos} 
                alt={'z/os'}
              ></img>

          </Grid> 


        </Grid>

        <Grid container>

           <Grid item xs={12} sm={6}>

            <img className='icon'
                src={react} 
                alt={'React'}
                ></img>

            <img className='icon' 
                src={javascript} 
                alt={'JavaScript'}
              ></img>

            <img className='icon'
                src={html} 
                alt={'HTML'}
               ></img>
  
            <img className='icon' 
                src={jquery} 
                alt={'jQuery'}
              ></img>

            <img className='icon' 
                src={responsiveDesign} 
                alt={'Responsive Design'}
                ></img>

          </Grid>
          
           <Grid item xs={12} sm={6}>

           {/* <img className='icon'
                src={handlebars} 
                alt={'Handlebars'}
              ></img> */}

              <img className='icon'
                src={machineLearning} 
                alt={'Machine Learning'}
              ></img>

              <img className='icon' 
                src={mvc} 
                alt={'MVC Architecture'}
              ></img>

              <img className='icon'
                src={css} 
                alt={'CSS'}
               ></img>

            <img className='icon' 
                src={restful_api} 
                alt={'RESTful API Design'}
              ></img>

              <img className='icon'
                src={ajax} 
                alt={'AJAX'}
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
                src={firebase} 
                alt={'Firebase'}
              ></img>

            <img className='icon'
                src={mongodb} 
                alt={'MongoDB'}
              ></img>



            <img className='icon' 
                src={mysql} 
                alt={'MySQL'}
              ></img>

            <img className='icon' 
              src={sequelize} 
              alt={'Sequelize'}
            ></img>

          </Grid>
            
          <Grid item xs={12} sm={6}>


            <img className='icon' 
                src={bootstrap} 
                alt={'Bootstrap'}
              ></img>

            <img className='icon' 
                    src={node} 
                    alt={'Node'}
                  ></img>

            <img className='icon' 
                  src={express} 
                  alt={'Express'}
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

      </Container>
      
    </section>
  );
}

export default SkillsSection;