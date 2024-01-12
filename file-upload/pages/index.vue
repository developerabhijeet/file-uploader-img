<template>
  <div>
    <FileUpload  />
  </div>
</template>

<script>
import FileUpload from '~/components/FileUpload';
import FileList from '~/components/FileList';

export default {
  components: {
    FileUpload,
    FileList,
  },
  computed: {
    files() {
      return this.$store.state.files;
    },
  },
  methods: {
    handleUpload(file) {
      this.$store.dispatch('uploadFile', file);
    },
  },
};
</script>
