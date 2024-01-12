<!-- pages/FileUpload.vue -->
<template>
  <div class="upload-main">
    <h1>File Upload</h1>
    <form class="upload-form" @submit.prevent="handleSubmit">
      <input type="file" @change="handleFileChange" />
      <button type="submit">Upload</button>
    </form>
    <FileList :files="uploadedFiles" />
  </div>
</template>

<script>

import FileList from './FileList.vue';
import { uploadFile } from '../services/fileService'
import { fetchFiles } from '../services/fileService'

export default {
  components: {
    FileList,
  },

  data() {
    return {
      selectedFile: null,
      uploadedFiles: [],
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },

    async handleSubmit() {
      if (!this.selectedFile) {
        alert("Please select a file");
        return;
      }
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      const res = await uploadFile(formData)
      if (res?.message) {
        const { files } = await fetchFiles();
        this.uploadedFiles = files || [];
      }
    },

  },
  async mounted() {
    const { files } = await fetchFiles();
    this.uploadedFiles = files || [];
  },
};
</script>
