import React, { Component } from 'react';
import './Home.css';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from './Navbar';
import {
  SplashSection, PortfolioSection, SkillsSection, AboutSection, AboutHeaderSection, ResumeSection, ContactSection, ContactHeaderSection
} from './Sections';
import Footer from './Footer';
import { about as AboutMe, skills, projects } from './data.json';

class Home extends Component {
  state = {
    location: 0,
    navbarLight: false,
    activeSection: 0,
    portfolioTop: 0,
    skillsTop: 0,
    aboutTop: 0,
    resumeTop: 0,
    contactTop: 0,
    projItemLongestDesc: 0,
    projItemInfoHeight: 0,
    numProj: 0
  }

  componentDidMount() {
    this._initProjItemVals();
    window.addEventListener('scroll', this.handleOnScroll);
    window.addEventListener('resize', this._updateTopValues);
    window.addEventListener('resize', this._updateProjItemVals);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
    window.removeEventListener('resize', this._updateTopValues);
    window.removeEventListener('resize', this._updateProjItemVals);
  }

  goToSection = (section) => {
    const topArray = [
      0, 
      this.state.skillsTop,
      this.state.portfolioTop,
      this.state.aboutTop,
      this.state.resumeTop,
      this.state.contactTop
    ];
    this.setState({activeSection: section});
    scroll.scrollTo(topArray[section], {
      duration: 480,
      smooth: true,
    });
  }

  handleShowMore = () => {
    const newNumProj = this.state.numProj + this._determineNumProj();

    this._initProjItemVals(newNumProj);
  }

  handleShowLess = () => {
    this._initProjItemVals();
    scroll.scrollTo(this.state.portfolioTop, {
      duration: 480,
      smooth: true
    });
  }

  handleOnScroll = (e) => {
    const scrollY = window.scrollY;
    this._toggleNavbarLight(scrollY);
    this._setActiveSection(scrollY);
  }

  _toggleNavbarLight = (scrollY) => {
    if (scrollY >= 120 && !this.state.navbarLight) {
      this.setState({navbarLight: true});
    } else if (scrollY < 120 && this.state.navbarLight) {
      this.setState({navbarLight: false});
    }
  }

  _setActiveSection = (scrollY) => {
    const { 
      activeSection, portfolioTop, skillsTop, aboutTop, resumeTop, contactTop
    } = this.state;

    if (activeSection !== 0 && scrollY < portfolioTop) {
      this.setState({activeSection: 0});
    } else if (activeSection !== 1 && scrollY >= portfolioTop && scrollY < skillsTop) {
      this.setState({activeSection: 1});
    } else if (activeSection !== 2 && scrollY >= skillsTop && scrollY < aboutTop) {
      this.setState({activeSection: 2});
    } else if (activeSection !== 3 && scrollY >= aboutTop && scrollY < resumeTop) {
      this.setState({activeSection: 3});
    } else if (activeSection !== 4 && scrollY >= resumeTop && scrollY < contactTop) {
      this.setState({activeSection: 4});
    } else if (activeSection !== 5 && scrollY >= contactTop) {
      this.setState({activeSection: 5});
    }
  }

  _updateTopValues = () => {
    this.setState({
      portfolioTop: document.getElementById('portfolio').offsetTop - 56,
      skillsTop: document.getElementById('skills').offsetTop - 56,
      // remove word 'about' in the about header section, so just go to the regular about section
      // aboutTop: document.getElementById('about').offsetTop - 456,
      aboutTop: document.getElementById('about').offsetTop - 56,
      resumeTop: document.getElementById('resume').offsetTop - 56,
      contactTop: document.getElementById('contact').offsetTop - 406
    });
  }

  _initProjItemVals = (currNumProj) => {
    const numProj = this._determineNumProj();
    let maxLength = 0;
    let projIndex;

    projects.slice(0, currNumProj || numProj).forEach((p, i) => {
      if (p.description.length > maxLength) {
        maxLength = p.description.length;
        projIndex = i;
      }
    });

    this.setState(
      {
        numProj: currNumProj || numProj,
        projItemLongestDesc: projIndex
      }, 
      () => {
        this._setProjItemInfoHeight();
        setTimeout(this._updateTopValues, 1000);
      }
    );
  }

  _setProjItemInfoHeight = () => {
    if (window.innerWidth >= 600) {
      this.setState({projItemInfoHeight: document.getElementById(`proj-item-${this.state.projItemLongestDesc}`).clientHeight});
    } else {
      this.setState({projItemInfoHeight: "auto"});
    }
  }

  _updateProjItemVals = () => {
    if (window.innerWidth >= 600) { 
      this._initProjItemVals();
    } else {
      this.setState({projItemInfoHeight: "auto"});
    }
  }

  _determineNumProj = () => {
    const w = window.innerWidth;
    let numProj;

    if (w < 600) {
      numProj = 3;
    } else if (w >= 600 && w < 960) {
      numProj = 4;
    } else {
      numProj = 6;
    }

    return numProj;
  }

  render() {
    return (
      <main className="home" onScroll={this.handleOnScroll}>
        <Navbar 
          navbarLight={this.state.navbarLight} 
          name={AboutMe.name}
          activeSection={this.state.activeSection}
          goToSection={this.goToSection} 
        />
        <SplashSection 
          name={AboutMe.name}
          headline={AboutMe.headline}
          github={AboutMe.github}
          linkedIn={AboutMe.linkedIn}
          goToSection={this.goToSection} 
        />

        <SkillsSection 
          frontEnd={skills.frontEnd}
          backEnd={skills.backEnd}
          other={skills.other}
        />

        <PortfolioSection 
          projects={projects}
          numProj={this.state.numProj}
          handleShowMore={this.handleShowMore}
          handleShowLess={this.handleShowLess}
          projItemLongestDesc={this.state.projItemLongestDesc}
          projItemInfoHeight={this.state.projItemInfoHeight}
        />

        <AboutHeaderSection 
        />
        <AboutSection 
          name={AboutMe.name}
          summary1={AboutMe.summary1}
          summary2={AboutMe.summary2}
          summary3={AboutMe.summary3}
          summary4={AboutMe.summary4}
          summary5={AboutMe.summary5}
        />
        <ResumeSection 
          resume={AboutMe.resume}
        />
        <ContactHeaderSection 
        />  
        <ContactSection 
          email={AboutMe.email}
          phone={AboutMe.phone}
          phoneDisp={AboutMe.phoneDisp}
          github={AboutMe.github}
          githubDisp={AboutMe.githubDisp}
          linkedIn={AboutMe.linkedIn}
          linkedInDisp={AboutMe.linkedInDisp}
          smallMap={AboutMe.smallMap}
          largeMap={AboutMe.largeMap}
        />        
        <Footer 
          year={AboutMe.year} 
          name={AboutMe.name} 
        />
      </main>
    );
  }
}

export default Home;