<template>
  <div id="app">
    <ProfileHeader :data="profile"/>
    <main>
      <div class="column">
        <AboutMe :text="profile.aboutme"/>
        <Projects :projects="projects"/>
      </div>
      <div class="column">
        <ContactInfo :info="profile"/>
        <Skills :skills="profile.skills" :skillIntro="profile.skillIntro" />
      </div>
    </main>
  </div>
</template>

<script>
import ProfileHeader from './components/shared/profileHeader/ProfileHeader'
import AboutMe from './components/shared/aboutMe/AboutMe'
import Projects from './components/shared/projects/Projects'
import ContactInfo from './components/shared/contactInfo/ContactInfo'
import Skills from './components/shared/skills/Skills'

export default {
  components: {
    ProfileHeader,
    AboutMe,
    Projects,
    ContactInfo,
    Skills,
  },
  data () {
    return {
      profile: {},
      projects: [],
    }
  },
  created () {
    this.loadProfile()
    this.loadProjects()
  },
  methods: {
    loadProfile () {
      this.$http.get('http://localhost:3000/profile')
        .then(response => response.json())
        .then(profileData => { this.profile = profileData },
          err => console.log(err))
    },
    loadProjects () {
      this.$http.get('http://localhost:3000/projects')
        .then(response => response.json())
        .then(projectsData => { this.projects = projectsData },
          err => console.log(err))
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import 'assets/constants.scss';

div#app {
  background-color: $app-background-color;
  padding-bottom: 50px;

  main .column > * {
    margin: 50px 50px 0px 50px;
  }

  a {
    color: $link-color;
    text-decoration: none;
  }

  .icon {
    padding-right: 5px;
    position: relative;
    top: 2px;
  }
}

@media (min-width: $break-mobile) {
  div#app main {
    display: grid;
    grid-template-columns: auto minmax(300px, 35%);
    padding: 0 30px;

    .column > * {
      margin: 50px 15px 0px 15px;
    }
  }
}
</style>
