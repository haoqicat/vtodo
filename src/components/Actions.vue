<template>
  <div class="wrap">
    <svg v-on:click="setFilter('ALL')" width="45px" height="40px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop" transform="translate(-415.000000, -731.000000)" :fill="allIconColor">
                <g id="action-list" transform="translate(415.000000, 723.000000)">
                    <g id="list-with-bullets" transform="translate(0.000000, 8.000000)">
                        <g id="Capa_1">
                            <g id="Group">
                                <ellipse id="Oval" cx="5.1121875" cy="5.0635" rx="5.1121875" ry="5.0635"></ellipse>
                                <ellipse id="Oval" cx="5.1121875" cy="19.0635" rx="5.1121875" ry="5.0635"></ellipse>
                                <ellipse id="Oval" cx="5.1121875" cy="34.0635" rx="5.1121875" ry="5.0635"></ellipse>
                                <g transform="translate(15.000000, 1.857143)" id="Shape">
                                    <path d="M0.9375,6.62582143 L28.704375,6.62582143 C28.9523438,6.62582143 29.1914063,6.52785714 29.3671875,6.35375 C29.5429688,6.17964286 29.641875,5.94332143 29.641875,5.69725 L29.6409375,0.928571429 C29.6409375,0.416 29.2209375,0 28.7034375,0 L0.9375,0 C0.42,0 0,0.416 0,0.928571429 L0,5.69725 C0,6.20982143 0.41953125,6.62582143 0.9375,6.62582143 Z"></path>
                                    <path d="M28.7034375,14 L0.9375,14 C0.42,14 0,14.416 0,14.9285714 L0,19.69725 C0,20.2098214 0.42,20.6258214 0.9375,20.6258214 L28.704375,20.6258214 C28.9523438,20.6258214 29.1914063,20.5278571 29.3671875,20.35375 C29.5429688,20.1796429 29.641875,19.9428571 29.641875,19.69725 L29.6409375,14.9285714 C29.6409375,14.416 29.221875,14 28.7034375,14 Z"></path>
                                    <path d="M28.7034375,29 L0.9375,29 C0.42,29 0,29.416 0,29.9285714 L0,34.69725 C0,35.2098214 0.42,35.6258214 0.9375,35.6258214 L28.704375,35.6258214 C28.9523438,35.6258214 29.1914063,35.5278571 29.3671875,35.35375 C29.5429688,35.1796429 29.641875,34.9428571 29.641875,34.69725 L29.6409375,29.9285714 C29.6409375,29.416 29.221875,29 28.7034375,29 Z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>

    <svg v-on:click="setFilter('COMPL')" width="43px" height="45px" viewBox="0 0 43 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 41.1 (35376) - http://www.bohemiancoding.com/sketch -->
        <title>Capa_1</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop" transform="translate(-566.000000, -723.000000)" :fill="complIconColor">
                <g id="action-list" transform="translate(415.000000, 723.000000)">
                    <g id="check-mark" transform="translate(151.000000, 0.000000)">
                        <g id="Capa_1">
                            <path d="M15.9411099,44.9996858 C14.5445726,44.9996858 13.2237666,44.3452572 12.3746771,43.2228287 L0.907154702,28.0533287 C-0.584367686,26.0804001 -0.196084104,23.2711144 1.77357261,21.7764715 C3.74643828,20.2811858 6.54913978,20.6726858 8.04130396,22.6443287 L15.5836323,32.6201858 L34.5530502,2.11147151 C35.859095,0.0125429433 38.6168711,-0.629671342 40.7168114,0.676614372 C42.8141846,1.9841858 43.454692,4.74847151 42.1480054,6.84932866 L19.7392293,42.8879001 C18.9607368,44.1408287 17.6168263,44.9289715 16.1451995,44.9958287 C16.0765278,44.9984001 16.0091398,44.9996858 15.9411099,44.9996858 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>

  </div>
</template>

<script>
import { ACTIVE_COLOR, NOT_ACTIVE } from '../constants/Colors'
export default {
  name: 'Actions',
  data: () => ({
    allIconColor: ACTIVE_COLOR,
    complIconColor: NOT_ACTIVE
  }),
  methods: {
    setFilter(filter) {
      this.allIconColor = filter === 'ALL' ? ACTIVE_COLOR : NOT_ACTIVE
      this.complIconColor = filter === 'ALL' ? NOT_ACTIVE : ACTIVE_COLOR
      this.$store.commit('setFilter', filter)
    }
  },
  computed: {
    currentFilter() {
      return this.$store.state.todo.currentFilter
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  svg {
    width: 20px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
