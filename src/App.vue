<template>
  <div id="app">
    <ProfileHeader :data="profile"/>
    <main>
      <AboutMe :text="profile.aboutme"/>
      <Projects :projects="projects"/>
      <ContactInfo :info="profile"/>
      <Skills :skills="profile.skills" :skillIntro="profile.skillIntro" />
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

  a {
    color: $link-color;
    text-decoration: none;
  }
}
</style>
