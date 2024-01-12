import Vue from "vue";
import Vuex from "vuex";
import * as fileService from "~/services/fileService";

Vue.use(Vuex);

export const state = () => ({
  files: [],
});

export const mutations = {
  SET_FILES(state, files) {
    state.files = files;
  },
};

export const actions = {
  async uploadFile({ commit }, file) {
    await fileService.uploadFile(file);
    const files = await fileService.fetchFiles();
    commit("SET_FILES", files);
  },
};
