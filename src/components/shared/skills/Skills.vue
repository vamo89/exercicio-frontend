<template>
  <section>
    <div class="title">Skills</div>
    <div class="text">{{ skillIntro }}</div>
    <div v-for="skill in skills" :key="skill.id">
      <div class="skill">
        <div class="name">{{ skill.name }}</div>
        <div class="level">{{ skillLevelToText(skill.level) }}</div>
        <div class="bar"><span class="bar-fill" :style="{ width: skillLevelToPercentage(skill.level) }"></span></div>
      </div>
    </div>
    <a><icon class="icon" name="external-link-alt"/>More on Coderwall</a>
  </section>
</template>

<script>
const levelName = [
  'What?',
  'Newbie',
  'Newbie',
  'Beginner',
  'Beginner',
  'Intermediate',
  'Intermediate',
  'Pro',
  'Pro',
  'Expert',
  'Master',
];

export default {
  props: ['skills', 'skillIntro'],
  methods: {
    skillLevelToText: function (level) {
      return levelName[level];
    },
    skillLevelToPercentage: function (level) {
      return `${level*10}%`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/constants';

section {
  background-color: $section-background-color;
  padding: 20px;

  .title {
    color: $section-title-color;
    font: $section-title-font;
    margin-bottom: 20px;
  }

  .text {
    color: $text-color;
    font: $text-font;
    margin-bottom: 20px;

    white-space: pre-line;
  }

  .skill {
    display: grid;
    grid-template-areas:
      "name level"
      "bar bar";
    margin-bottom: 20px;

    .name {
      color: $section-title-color;
      font: $skill-name-font;
    }

    .level {
      color: $section-subtitle-color;
      font: $text-font;

      white-space: pre-line;
      justify-self: right;
    }

    .bar {
      background-color: #ddd;
      height: 20px;
      grid-area: bar;

      .bar-fill {
        display: block;
        height: 100%;
        background-color: #69ca8e;
      }
    }
  }
}
</style>
