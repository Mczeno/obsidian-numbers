import { Plugin, MarkdownPostProcessorContext } from "obsidian";
import AppComponent from "./components/App.svelte";

export default class NumbersPlugin extends Plugin {
  async onload() {
    console.log("加载自定义图形插件");

    // 注册代码块处理器
    this.registerMarkdownCodeBlockProcessor("numbers", (source, el, ctx) => {
      try {
        const graphData = JSON.parse(source);

        // 创建 Svelte 组件
        new AppComponent({
          target: el,
          props: {
            data: graphData,
          },
        });
      } catch (error) {
        console.error("解析图形数据失败:", error);
        el.createEl("div", { text: "图形数据格式错误" });
      }
    });
  }

  onunload() {
    console.log("卸载自定义图形插件");
  }
}
