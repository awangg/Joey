<template>
    <nb-container class="container">
      <nb-content padder>
        <nb-card>
          <nb-card-item cardBody>
              <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage"/>
          </nb-card-item>

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
    <nb-container>
        <nb-header hasTabs/>
        <nb-tabs>
        <nb-tab :heading="getHeadingCompForTabColor()">
            <tab-one />
        </nb-tab>
        <nb-tab :heading="getHeadingCompForTabMotion()">
            <tab-two />
        </nb-tab>
        <nb-tab :heading="getHeadingCompForTabAcces()">
            <tab-three />
        </nb-tab>
        </nb-tabs>
  </nb-container>
  </nb-container>
</template>

<script>
import React from "react";
import { TabHeading, Icon, Text } from "native-base";
import TabColor from "../components/tabColor";
import TabMotion from "../components/tabMotion";
import TabAcces from "../components/tabAcces";
export default {
  components: { TabColor, TabMotion, TabAcces },
  methods: {
    getHeadingCompForTabColor: function() {
      return (
        <TabHeading>
          <Icon name="camera" />
          <Text>Camera</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTabMotion: function() {
      return (
        <TabHeading>
          <Text>No Icon</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTabAcces: function() {
      return (
        <TabHeading>
          <Icon name="apps" />
        </TabHeading>
      );
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