<template>
  <div class="part-one">
    <img class="part-one-image" src="https://i.loli.net/2019/08/01/5d42a6f2eea6753197.jpg" alt="头像">
    <p>姓&emsp;&emsp;名：吴琪</p>
    <p>学&emsp;&emsp;历：本科</p>
    <p>毕业时间：2019.7</p>
    <p>年&emsp;&emsp;龄：22</p>
    <p>联系电话：1507126xxxx</p>
    <p>电子邮箱：Elaine.wuqi@foxmail.com</p>
    <p>博&emsp;&emsp;客：<a href="https://neptoo.github.io">neptoo.github.io</a></p>
    <p>GitHub：<a href="https://github.com/neptoo">neptoo</a></p>
  </div>
</template>
<script>
export default {
  name: "PartOne",
  data() {
    return {
      // headImage: require('../../assets/head.jpg')
    }
  }
};

</script>
<style scoped>
.part-one {
  width: 100%;
  height: 500px;
  border: 1px solid #0b2d50;
  border-radius: 10px;
  padding: 0 30px;
  padding-top: 20px;
}
p {
  line-height: 30px;
}
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
.part-one-image {
  width: 150px;
  padding-bottom: 10px;
}
</style>
