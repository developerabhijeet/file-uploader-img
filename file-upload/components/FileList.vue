<!-- fileList.vue -->
<template>
  <div class="flexImgBox" v-if="files.length">
    <div class="imagGrid" v-for="(file, index) in files" :key="index">
      <div class="heading-box">
        <h2>{{ getShortDescription(file?.originalname) }}</h2>
      </div>
      <div>
        <img
          :src="`data:${file.mimetype};base64,${file.base64Data}`"
          alt="Converted to base64"
          style="max-width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    files: Array,
  },
  methods: {
    getShortDescription(description) {
      return `${description.slice(0, 20)}${description.length > 20 ? "..." : ""} `;
    },
  },
};
</script>
