<template>
  <div id="app">
    <ProfileHeader/>
    <main>
      <AboutMe/>
      <section id="projects">
        Latest Projects
        <ul>
          <li v-for="project in projects" :key="project.id">
            <Project :project="project" />
          </li>
        </ul>
      </section>
      <ContactInfo/>
      <Skills/>
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
}
</script>

<style lang="scss">
</style>
