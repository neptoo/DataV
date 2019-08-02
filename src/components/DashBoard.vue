<template>
  <div class="app">
    <div class="banner">
      <img class="hidden-md-only hidden-lg-only hidden-xl-only" :src="banner" alt="banner 图">
    </div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
          <PartOne></PartOne>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="part">
          <PartTwo></PartTwo>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
          <PartThree></PartThree>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
          <PartFour></PartFour>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
          <PartFive></PartFive>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
          <PartSix></PartSix>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
          <PartSeven></PartSeven>
      </el-col>
    </el-row>
  </div>
</template>
<style type="text/css">
body {
  background: url(../assets/bg.jpg) no-repeat scroll center center / cover;
  background-size: 100% 100%;
  color: #fff;
}
.app {
  width: 100%;
}
.part {
  padding: 20px;
}

</style>
<script>
import PartOne from './views/PartOne.vue';
import PartTwo from './views/PartTwo.vue';
import PartThree from './views/PartThree.vue';
import PartFour from './views/PartFour.vue';
import PartFive from './views/PartFive.vue';
import PartSix from './views/PartSix.vue';
import PartSeven from './views/PartSeven.vue';
export default {
  name: "DashBoard",
  data() {
    return {
      banner: require("../assets/head_bg1.png"),
    };
  },
  components: {
    PartOne,
    PartTwo,
    PartThree,
    PartFour,
    PartFive,
    PartSix,
    PartSeven
  }
}

</script>
