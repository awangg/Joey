<template>
  <nb-container class="outer">
    <image
        :style="{width: '100%', height: '100%', position: 'absolute'}"
        :source="require('../assets/authbg.png')" />
    <nb-container class="container">
      <nb-content padder>
        <nb-card>
          <nb-card-item cardBody>
              <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage"/>
          </nb-card-item>

          <nb-body>
            <nb-text class=name>Duncaroo Roo</nb-text>
          </nb-body>

          <nb-grid>
            <nb-row class=row>
              <nb-col class=col><nb-text class=cat>Events</nb-text></nb-col>
              <nb-col class=col><nb-text class=cat>Points</nb-text></nb-col>
              <nb-col class=col><nb-text class=cat>Rank</nb-text></nb-col>
            </nb-row>
            
            <nb-row class=row>
              <nb-col class=col><nb-text class=num>5</nb-text></nb-col>
              <nb-col class=col><nb-text class=num>100</nb-text></nb-col>
              <nb-col class=col><nb-text class=num>1</nb-text></nb-col>
            </nb-row>

          </nb-grid>

        </nb-card>
      </nb-content>
    </nb-container>

    <nb-button class=button :on-press="onPressLearnMore">
        <nb-text class=text>Customize!</nb-text>
    </nb-button>

  </nb-container>
</template>

<script>
  import cardImage from "../assets/circle.png";
  export default {
    data: function() {
      return {
        cardImage,
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover"
          }
        }
      };
    },
    methods: {
        onPressLearnMore: function() {
            alert('Link to Customization Page')
        }
    }
  };



</script>

<style scoped>
.outer {
  flex: 1;
  align-items: center;
}

.container {
  background-color: transparent;
}

.name {
  bottom: 100;
  font-size: 40px;
  color: #1a491a;
}

.col {
  align-items: center;
  bottom: 20;
}

.row{
  bottom: 10%;
}

.cat{
  font-size: 25px;
  color: #a8ce78;
}

.num{
  font-size: 20px;
  font-weight: bold;
  color: #1a491a;
}

.card-item-image {
  left: -2%;
  top: -20%;
}

.button {
  margin-bottom: 50;
  margin-left: 150;
  margin-right: 100;
  background-color: white;
}

.text {
  color: #1a491a;
}

</style>