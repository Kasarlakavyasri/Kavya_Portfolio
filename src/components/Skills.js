import React from 'react';
import './Skills.css'; // Import CSS file for styling
import python from './images/python.png';
import java from './images/java.png';
import html from './images/html.png';
import js from './images/js.png';
import C from './images/C.png';
import Cplus from './images/Cplus.png';
import php from './images/php.png';
import css from './images/css.png';
import react from './images/react.jpeg';
import postgresql from './images/postgresql.jpeg';
import postman from './images/postman.png';
import mysql from './images/mysql.png';
import nosql from './images/nosql.jpeg';
import ssms from './images/ssms.jpeg';
import sql from './images/sql.jpeg';
import mongodb from './images/mongodb.png';
import IBM from './images/IBM.jpeg';
import linux from './images/linux.png';
import flask from './images/flask.png';
import django from './images/django.png';
import docker from './images/docker.png';
import vscode from './images/vscode.jpeg';
import cloud from './images/cloud.png';
import aws from './images/aws.png';
import snipe from './images/snipe.jpeg';
import netbeans from './images/netbeans.jpeg';
import pycharm from './images/pycharm.jpeg';
import jupyter from './images/jupyter.png';
import power from './images/power.png';
import git from './images/git.png';
import oracle from './images/oracle.png';
import figma from './images/figma.jpeg';
import node from './images/node.jpeg';
import snow from './images/snow.jpeg';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2>Skills</h2>
      <h4>Look at what all I know.</h4>
      <div className="skills-category">
        <div className="container">
          <h3>Languages</h3>
          <div className="programming">
            <div className="skill">
              <img src={python} alt="Python" title='Python'/>
            </div>
            <div className="skill">
              <img src={java} alt="Java" title='Java' />
            </div>
            <div className="skill">
              <img src={Cplus} alt="C++" title='C++' />
            </div>
            <div className="skill">
              <img src={php} alt="PHP" title='PHP'/>
            </div>
            <div className="skill">
              <img src={sql} alt="SQL" title='SQL'/>
            </div>
            <div className="skill">
              <img src={js} alt="JavaScript" title='JavaScript'/>
            </div>
          </div>
          
          <h3>Web Development</h3>
          <div className="web">
            <div className="skill">
              <img src={html} alt="HTML" title='HTML'/>
            </div>
            <div className="skill">
              <img src={css} alt="CSS" title='CSS'/>
            </div>
            <div className="skill">
              <img src={react} alt="React" title='React'/>
            </div>
            <div className="skill">
              <img src={node} alt="Node.js" title='Node.js'/>
            </div>
            <div className="skill">
              <img src={flask} alt="Flask" title='Flask'/>
            </div>
            <div className="skill">
              <img src={django} alt="Django" title='Django'/>
            </div>
          </div>
          
          <h3>Databases</h3>
          <div className="database">
            <div className="skill">
              <img src={postgresql} alt="PostgreSQL" title='PostgreSQL'/>
            </div>
            <div className="skill">
              <img src={mysql} alt="MySQL" title='MySQL'/>
            </div>
            <div className="skill">
              <img src={nosql} alt="NoSQL" title='NoSQL'/>
            </div>
            <div className="skill">
              <img src={mongodb} alt="MongoDB" title='MongoDB'/>
            </div>
            <div className="skill">
              <img src={oracle} alt="Oracle" title='Oracle'/>
            </div>
            <div className="skill">
              <img src={ssms} alt="SSMS" title='SSMS'/>
            </div>
          </div>
          
          <h3>Tools/Frameworks</h3>
          <div className="tools">
            <div className="skill">
              <img src={postman} alt="Postman" title='Postman'/>
            </div>
            <div className="skill">
              <img src={IBM} alt="IBM" title='IBM Websphere'/>
            </div>
            <div className="skill">
              <img src={linux} alt="Linux" title='Linux'/>
            </div>
            <div className="skill">
              <img src={docker} alt="Docker" title='Docker'/>
            </div>
            <div className="skill">
              <img src={vscode} alt="VSCode" title='Visual Studio' />
            </div>
            <div className="skill">
              <img src={cloud} alt="Cloud" title='Google Cloud Platform' />
            </div>
            <div className="skill">
              <img src={aws} alt="AWS" title='Amazon Web Services'/>
            </div>
            <div className="skill">
              <img src={snipe} alt="Snipe" title='Snipe IT'/>
            </div>
            <div className="skill">
              <img src={netbeans} alt="NetBeans" title='NetBeans' />
            </div>
            <div className="skill">
              <img src={pycharm} alt="PyCharm" title='PyCharm'/>
            </div>
            <div className="skill">
              <img src={jupyter} alt="Jupyter" title='Jupyter'/>
            </div>
            <div className="skill">
              <img src={power} alt="Power" title='Microsoft Power BI'/>
            </div>
            <div className="skill">
              <img src={git} alt="Git" title='Git'/>
            </div>
            <div className="skill">
              <img src={snow} alt="Snowflake" title='Snowflake'/>
            </div>
            <div className="skill">
              <img src={figma} alt="Figma" title='Figma'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
