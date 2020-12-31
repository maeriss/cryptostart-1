<template>
  <div>
    <h2>This is the page for the currencies list</h2>
    <div class="layout row">
      <div class="flex text-xs-center xs12">
        <div class="card" style="height: auto;">
          <div class="layout">
            <div class="flex">
              <div class="card card--flat" style="height: auto;">
                <div class="container fluid grid-list-md">
                  <div class="layout row wrap">
                    <div class="flex xs12 sm6 md4 lg4">
                      <router-link to="/currencies/monero" class="ma-2 pa-3 pt-0 card card--hover" style="height: auto;">
                        <div class="card__text">
                          <h5 class="headline headings">Monero</h5>
                          <span class="grey--text headings">XMR</span>
                        </div>
                        <div class="card__media" style="height: 216px;">
                          <div class="card__media__background" style="background: rgba(0, 0, 0, 0) no-repeat scroll center center / contain;">
                            <img src="../assets/monero.png" alt="image btc">
                          </div>
                          <div class="card__media__content"></div>
                        </div>
                      </router-link>
                    </div>
                    <div class="flex xs12 sm6 md4 lg4">
                      <router-link to="/nothing" class="ma-2 pa-3 pt-0 card card--hover" style="height: auto;">
                        <div class="card__text">
                          <h5 class="headline headings">Bitcoin</h5>
                          <span class="grey--text headings">BTC</span>
                        </div>
                        <div class="card__media" style="height: 216px;">
                          <div class="card__media__background" style="background: rgba(0, 0, 0, 0) no-repeat scroll center center / contain;">
                            <img src="../assets/btc.jpg" alt="image btc">
                          </div>
                          <div class="card__media__content"></div>
                        </div>
                      </router-link>
                    </div>
                    <div class="flex xs12 sm6 md4 lg4">
                      <router-link to="/nothing" class="ma-2 pa-3 pt-0 card card--hover" style="height: auto;">
                        <div class="card__text">
                          <h5 class="headline headings">Ethereum</h5>
                          <span class="grey--text headings">ETH</span>
                        </div>
                        <div class="card__media" style="height: 216px;">
                          <div class="card__media__background" style="background: rgba(0, 0, 0, 0) no-repeat scroll center center / contain;">
                            <img src="../assets/eth.jpg" alt="image btc">
                          </div>
                          <div class="card__media__content"></div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

.layout.row {
    -ms-flex-direction: row;
    flex-direction: row;
}

.flex.xs12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 100%;
}

.card {
    display: block;
    border-radius: 2px;
    min-width: 0;
    position: relative;
    text-decoration: none;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
}

.layout {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.card--flat {
    box-shadow: 0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);
}

.application.theme--light a {
    cursor: pointer;
}

.card--hover {
    cursor: pointer;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
        transition-property: all;
    transition-property: box-shadow;
}

.container.grid-list-md {
    padding: 8px;
}

.container.fluid {
    max-width: 100%;
}

.card > :first-child:not(.btn) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}

.card > :last-child:not(.btn) {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}

.layout.wrap {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.layout.row {
    -ms-flex-direction: row;
    flex-direction: row;
}

.container.grid-list-md .layout .flex {
    padding: 4px;
}

.flex.lg4 {
    -ms-flex-preferred-size: 33.33%;
    flex-basis: 33.33%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 33.33%;
}

.flex.md4 {
    -ms-flex-preferred-size: 33.33%;
    flex-basis: 33.33%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 33.33%;
}

.flex.sm6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 50%;
}

.flex.xs12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 100%;
}

.flex {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
        flex-grow: 1;
        flex-basis: auto;
}

img {
  width: 350px;
  height: 200px;
}

.headings {
    margin: 0;
}
.headline {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: normal;
}

.grey--text {
    color: #9e9e9e;
}

.card__media {
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    position: relative;
}

.card__media__background {
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.card__media__content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    position: relative;
}

</style>