# Reload Window

> 在状态栏左侧/右侧添加一个可配置的重载窗口按钮。

前端项目安装npm依赖或编译代码后可能需要重启vscode，以前是通过命令，后来找到了这个 [Reload](https://marketplace.visualstudio.com/items?itemName=natqe.reload) 扩展帮我简化了操作。非常感谢 [natqe](https://github.com/natqe) 的 [reload](https://github.com/natqe/reload) 的给与我灵感。

> Add a configurable reload window button to the left/right side of the status bar.

Front-end projects may need to restart vscode after installing npm dependencies or compiling code. I used to use commands, but then I found this [Reload](https://marketplace.visualstudio.com/items?itemName=natqe.reload) extension to help me simplify it. operate. Many thanks to [natqe](https://github.com/natqe)’s [reload](https://github.com/natqe/reload) for giving me inspiration.

## 截屏 Screenshots

- 左 left

![left](https://raw.githubusercontent.com/tomjs/vscode-reload/main/resources/screenshots/left.png)

- 右 right

![right](https://raw.githubusercontent.com/tomjs/vscode-reload/main/resources/screenshots/right.png)

## 设置 Settings

### 示例 Examples

```json
{
  "tomjs.reload.position": "right",
  "tomjs.reload.text": "Reload",
  "tomjs.reload.tooltip": "I'll be back!"
}
```

### 中文

- `tomjs.reload.position`: 状态栏中重载按钮的位置，默认为 `right`.

  - `left`: 显示在状态栏左下角
  - `right`: 显示在状态栏右下角

- `tomjs.reload.text`: 重新加载按钮的文本，默认为 `重载`.
- `tomjs.reload.tooltip`: 重新加载按钮的提示，默认为 `重载窗口`.

### English

- `tomjs.reload.position`: The position of the reload button in the status bar, default is `right`.

  - `left`: Show on the left side of the status bar.
  - `right`: Show on the right side of the status bar.

- `tomjs.reload.text`: The text of the reload button in the status bar. default: `Reload`.
- `tomjs.reload.tooltip`: The tooltip of the reload button in the status bar. default: `Reload Window`.
