<template>
  <nav :style="{ background: background || '#333' }">
      <ul :style="{ background: background || '#333' }" ref="nav">
          <figure class="image-logo" @click="toggleNav">
              <img :src="imagePath" height="50" width="50" />
          </figure>
          <li
            v-for="(link, index) in navLinks"
            :key="index"
            @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
            @mouseleave="$event.currentTarget.style.background = background || '#333' "
            >
            <router-link
                :to="link.path"
                :style="{ color: linkColor || '#DDD' }"
                v-if="!isLoggedIn && link.path === '/' || link.path === '/login'"
            >
                {{ link.text }}
                <i :class="link.icon" />
            </router-link>
            <router-link
                :to="link.path"
                :style="{ color: linkColor || '#DDD' }"
                v-else-if="isLoggedIn"
            >
                {{ link.text }}
                <i :class="link.icon" />
            </router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
      props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
      methods: {
          toggleNav () {
              const nav = this.$refs.nav.classList
              nav.contains('active') ? nav.remove('active') : nav.add('active')
          }
      },
      computed: {
        ...mapGetters(['isLoggedIn'])
      }
    }
</script>

<style scoped lang="scss">
    nav {
        height: 60px;
        width: 100%;
        color:aquamarine;
        ul {
            display: flex;
            height: 100%;
            align-items: center;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;

            figure {
                cursor: pointer;
            }

            a {
                text-decoration: none;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
            }

            i {
                margin-right: 10px;
                font-size: 22px;
            }

            li {
                list-style-type: none;
                padding: 10px 20px;
            }
        }
    }

@media screen and (max-width: 759px) {
    nav {
        ul {
            z-index: 1000;
            position: fixed;
            width: 300px;
            flex-direction: column;
            left: -240px;
            transition: 300ms ease all;
            top: 60px;

            &.active {
                left: 0px;
            }

            figure {
                position: fixed;
                z-index: 1;
                top: 10px;
                left: 2px;
                margin-block-start: -10px;
                margin-block-end: 0;
                margin-inline-start: -2px;
                margin-inline-end: 0;
                background-color: #2c3e50;
                padding: 4px 5px 8px 5px;
            }
            li {
                width: 100%;
                padding-left: 0;
                padding-right: 0;
            }
            a {
                flex-direction: row;
                margin-left: 20px;
                margin-right: 14px;
                justify-content: space-between;
            }
        }
    }
}
</style>
