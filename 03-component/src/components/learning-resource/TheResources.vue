<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources-vue')"
      :mode="storedResButtonMode"
    >Stored Resources</base-button>
    <base-button
      @click="setSelectedTab('add-resource-vue')"
      :mode="addResButtonMode"
    >Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script lang="ts">
import StoredResourcesVue from './StoredResources.vue';
import AddResourceVue from './AddResource.vue';

export default {
  components: {
    StoredResourcesVue,
    AddResourceVue,
  },
  data() {
    return {
      selectedTab: 'stored-resources-vue',
      storeResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'google',
          description: 'Learn to google',
          link: 'https://google.com'
        }
      ],
    }
  },
  provide() {
    return {
      resources: this.storeResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode(): string | null {
      return this.selectedTab === 'stored-resources-vue'? null : 'flat';
    },
    addResButtonMode(): string | null {
      return this.selectedTab === 'add-resource-vue'? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab: string) {
      this.selectedTab = tab
    },
    addResource(title: string, description: string, link: string) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storeResources.unshift(newResource);
      this.selectedTab = 'stored-resources-vue';
    },
    removeResource(resId: string) {
      const resIndex = this.storeResources.findIndex(res => res.id === resId);
      this.storeResources.splice(resIndex, 1);
    }
  }
}
</script>

