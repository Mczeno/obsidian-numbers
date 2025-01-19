<script lang="ts">
    export let data: any;

    // 这里可以添加图形渲染逻辑
    $: console.log("收到图形数据:", data);
</script>

<div class="graph-container">
    <!-- 这里添加图形渲染的 HTML 结构 -->
    <p>图形将在这里渲染</p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>

<style>
    .graph-container {
        width: 100%;
        min-height: 200px;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>
