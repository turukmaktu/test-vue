<template>
  <v-app light>
    <v-content>
      <FoundYourAcc/>
    </v-content>
  </v-app>
</template>

<script>
import FoundYourAcc from './components/FundYourAcc';

export default {
  name: 'App',

  components: {
    FoundYourAcc,
  },

  data: () => ({
  }),
};
</script>
