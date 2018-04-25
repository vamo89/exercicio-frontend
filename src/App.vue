<template>
  <div id="app">
    <ProfileHeader :data="profile"/>
    <main>
      <AboutMe :text="profile.aboutme"/>
      <section id="projects">
        Latest Projects
        <ul>
          <li v-for="project in projects" :key="project.id">
            <Project :project="project" />
          </li>
        </ul>
      </section>
      <ContactInfo :info="profile"/>
      <Skills :skills="profile.skills" />
    </main>
  </div>
</template>

<script>
import ProfileHeader from './components/shared/profileHeader/ProfileHeader'
import AboutMe from './components/shared/aboutMe/AboutMe'
import Project from './components/shared/project/Project'
import ContactInfo from './components/shared/contactInfo/ContactInfo'
import Skills from './components/shared/skills/Skills'

export default {
  components: {
    ProfileHeader,
    AboutMe,
    Project,
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
</style>
