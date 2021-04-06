<template>
  <div class="application--wrap">
    <div class="layout mt-2 row">
      <div class="flex text-xs-center xs12">
        <div class="card" style="height: auto;">
          <div class="layout row wrap mb-3">
            <div class="flex xs12 sm6 md4 lg4 xl4">
              <router-link to="/currencies/monero" class="box card card--hover" style="height: auto;">
                <div class="card__text">
                  <h5 class="headline ma-0">Monero</h5>
                  <span class="grey--text ma-0">XMR</span>
                </div>
                <div class="card__media" style="height: 216px;">
                  <div class="card__media__background" style="background: rgba(0, 0, 0, 0) no-repeat scroll center center / contain;">
                    <img src="../assets/monero.png" alt="image btc">
                  </div>
                </div>
              </router-link>
            </div>
            <div class="flex xs12 sm6 md4 lg4 xl4">
              <router-link to="/currencies/bitcoin" class="box card card--hover" style="height: auto;">
                <div class="card__text">
                  <h5 class="headline ma-0">Bitcoin</h5>
                  <span class="grey--text ma-0">BTC</span>
                </div>
                <div class="card__media" style="height: 216px;">
                  <div class="card__media__background" style="background: rgba(0, 0, 0, 0) no-repeat scroll center center / contain;">
                    <img src="../assets/btc.jpg" alt="image btc">
                  </div>
                </div>
              </router-link>
            </div>
            <div class="flex xs12 sm6 md4 lg4 xl4">
              <router-link to="/currencies/ether" class="box card card--hover" style="height: auto;">
                <div class="card__text">
                  <h5 class="headline ma-0">Ether</h5>
                  <span class="grey--text ma-0">ETH</span>
                </div>
                <div class="card__media" style="height: 216px;">
                  <div class="card__media__background" style="background: rgba(0, 0, 0, 0) no-repeat scroll center center / contain;">
                    <img src="../assets/eth.jpg" alt="image btc">
                  </div>
                </div>
              </router-link>
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

.application--wrap {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 80vh;
    max-width: 100%;
    position: relative;
}

.layout {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.layout.row {
    -ms-flex-direction: row;
    flex-direction: row;
}

.layout.wrap {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.mt-2 {
    margin-top: 8px;
}

.mb-3 {
    margin-bottom: 16px !important;
}

.flex.xs12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 100%;
}

.text-xs-center {
    text-align: center !important;
}

* {
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}

.card {
    display: block;
    border-radius: 2px;
    min-width: 0;
    position: relative;
    text-decoration: none;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
}

.box {
  margin-left: 5px;
  margin-right: 5px;
}

.flex.lg4 {
    -ms-flex-preferred-size: 33.33333333333333%;
    flex-basis: 33.33333333333333%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 33.33333333333333%;
}

.flex.md4 {
    -ms-flex-preferred-size: 33.33333333333333%;
    flex-basis: 33.33333333333333%;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 33.33333333333333%;
}

.flex.sm6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: auto;
    -ms-flex-positive: 0;
    flex-grow: 1;
    max-width: 50%;
    min-width: 385px;
}

.card__text {
    padding: 16px;
    width: 100%;
}

.ma-0 {
    margin: 0 !important;
}

.headline {
    font-size: 24px !important;
    font-weight: 400;
    line-height: 32px !important;
    letter-spacing: normal !important;
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

img {
  width: 350px;
  height: 200px;
}

@media screen and (max-width: 1059px) {
  .application--wrap {
    width: 900px;
    flex-wrap: wrap;
    background: white;
    margin: auto;
  }
}

@media screen and (max-width: 759px) {
  .application--wrap {
    width: 300px;
    flex-wrap: wrap;
    background: white;
  }
}

</style>
