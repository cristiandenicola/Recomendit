<script>
import SidebarLink from './SidebarLink.vue'
import {collapsed, toggleSidebar, sidebarWidth} from './state'
export default {
    props: {},
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
                <div>
                </div>
            </span>
            <span v-else></span>
        </h1>

        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/results" icon="fas fa-columns">Results</SidebarLink>
        <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
        <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
        <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink>

        <span
            class="collapse-icon"
            :class="{ 'rotate-180': collapsed }"
            @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left" id="puntatore"/>
        </span>
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #221F1F;
    --sidebar-item-hover: #4c4c4c;
    --sidebar-item-active: #B81D24;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: #F5F5F1;

  transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

#puntatore{
    cursor: pointer; 
}

</style>