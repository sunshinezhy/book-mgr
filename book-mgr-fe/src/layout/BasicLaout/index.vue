<template>
    <!-- 后台布局 -->
    <div class="basic-layout">
        <!-- 头部 -->
        <div class="app-header">
            <!-- 左侧log+title -->
            <div class="left">
                <img src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1" alt="">
                <div class="title">图书管理系统</div>
            </div>
            <!-- 右侧欢迎信息+退出按钮 -->
            <div class="right">
                <div class="hello-msg">侬好呀，xxx</div>
                <div class="logout">退出</div>
            </div>
        </div>
        <div class="app-header-placeholder"></div>
        <!-- 页面内容 -->
        <div class="app-content">
            <!-- 左侧导航部分 -->
            <div class="left">
                <app-nav />
            </div>
            <!-- 右侧每个内容放置的地方 -->
            <div class="right">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
    @import './index.scss';
</style>