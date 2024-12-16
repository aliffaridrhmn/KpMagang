<template>
  <div class="wrapper">
    <div class="logo">
      <h1>Testing App</h1>
    </div>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae aliquid dolorem optio voluptatem cupiditate, obcaecati autem quia! Reiciendis nemo, praesentium voluptatibus laudantium vitae inventore sequi, fuga placeat a odio
        cumque. Qui similique labore nesciunt quo explicabo quibusdam inventore. Repellendus ratione ea atque nobis praesentium laborum cupiditate. Non corrupti fuga, cumque minus, sapiente sit laudantium sed maxime quisquam, numquam
        mollitia nemo!
      </p>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  height: 50vh;
  gap: 20px;
  bottom: 0;
  background-color: rgb(27, 27, 27);
}
.logo {
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  width: 50%;
}
.text {
  color: rgb(255, 255, 255);
  gap: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: justify;
}
.text > p {
  line-height: 3vh;
}
</style>
