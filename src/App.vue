<template>
  <div id="app">
    <header>
      <profilePic />
      <info>
        <name/>
        <title/>
        <social>
          <ul>
            <li>twitter</li>
            <li>google+</li>
            <li>linkedIn</li>
            <li>github</li>
            <li>yahoo?</li>
          </ul>
        </social>
      </info>
      <contact-btn/>
    </header>
    <main>
      <about-me/>
      <projets>
        Latest Projects
        <ul>
          <li repeat="projects">
            <project>
              <img />
              <title />
              <description />
              <link />
            </project>

            <project featured>
              <title />
              <subtitle />
              <img big />
              <description />
              <link button />
            </project>
          </li>
        </ul>
      </projets>
      <info/>
      <skills/>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
