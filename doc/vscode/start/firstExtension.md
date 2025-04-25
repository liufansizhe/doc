# 您的第一个扩展
在本主题中，我们将教您构建扩展的基本概念。确保您已安装 **Node.js** 和 **Git**。   
首先，使用 **Yeoman** 和 **VS Code 扩展生成器**搭建 TypeScript 或 JavaScript 项目，为开发做好准备。
```js
npm install --global yo generator-code

yo code
```
对于 TypeScript 项目，请填写以下字段：
```js
# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Y
# ? Which bundler to use? unbundled
# ? Which package manager to use? npm

# ? Do you want to open the new folder with Visual Studio Code? Open with `code`
```
在编辑器中，按 F5 。这将在新的窗口中编译并运行扩展。   
在新窗口中从命令面板 （Ctrl+Shift+P） 运行 Hello World 命令，您应该会看到 Hello World from HelloWorld！（来自 HelloWorld！ 的 Hello World！）通知显示出来。成功！   
如果在调试窗口中看不到 Hello World 命令，请检查 package.json 文件，并确保 engines.vscode 版本与已安装的 VS Code 版本兼容。
## 一、开发扩展
让我们对消息进行更改：
1. 在 extension.ts 中，将消息从“Hello World from HelloWorld！”更改为“Hello VS Code”。
2. 在新窗口中运行。
3. 再次运行命令 Hello World。
## 二、调试扩展
VS Code 的内置调试功能使调试扩展变得容易。通过单击一行旁边的装订线来设置断点，VS Code 将命中断点。您可以将鼠标悬停在编辑器中的变量上，或使用左侧的 Run and Debug 视图来检查变量的值。Debug Console 允许您计算表达式。
<video src="./assets/video.mp4" style="width:100%" controls/>

## 三、后续步骤
在下一主题 扩展剖分中，我们将仔细研究 Hello World 示例的源代码并解释关键概念。  
您可以在以下位置找到本教程的源代码：https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-sample。   
扩展指南主题包含其他示例，每个示例都说明了不同的 VS Code API 或贡献点，并遵循我们的 UX 指南中的建议。
### 使用javascript
在本指南中，我们主要介绍如何使用 TypeScript 开发 VS Code 扩展，因为我们认为 TypeScript 为开发 VS Code 扩展提供了最佳体验。但是，如果您更喜欢 JavaScript，您仍然可以使用 [helloworld-minimal-sample](https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-minimal-sample)。
### UX 指南
这也是查看我们的 UX 指南的好时机，以便您可以开始设计扩展用户界面以遵循 VS Code 最佳实践。