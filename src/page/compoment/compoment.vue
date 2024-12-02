<template>
    <div class="main-header">
        <div>
            <p class="name-field">Hi！我是斑马之乡的斑马</p>
            <p class="intro-section">我是你的智能旅游小助手，可以帮你规划行程并且回答你想知道的问题！</p>
        </div>
        <div>
            <img src="@/assets/intro.png">
        </div>
    </div>
</template>


<script setup lang="ts">

</script>

<style scoped lang="less">

.main-header{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 30px 0;
    img{
        width: 100%;
        object-fit: fill;
    }
    .name-field{
        font-family: "STLiti";
        font-size: 20px;
        color: #47709b;
    }
    .intro-section{
        font-weight: bold;
        color: #feffff;
        
        line-height: 2;
    }
}

</style>