# 结束语
在 你第一个插件 主题中，您学习了如何创建、运行和调试扩展。在扩展剖析主题中，您学习了 Visual Studio Code 扩展开发的基本概念。但是，我们只看到了冰山一角，以下是一些建议的路线，可进一步提高您的 VS Code 扩展开发技能。
## 一、扩展功能
在本节中，我们将 VS Code API 和贡献点分为几个类别，每个类别都简短地描述了您的扩展可以实现的目标。通过查看 VS Code API 或阅读扩展功能部分了解新的扩展概念，验证您的扩展想法是否可实现。
## 二、指南和例子
我们有很多示例扩展可供您改编，其中一些包含解释源代码的详细指南。您可以在扩展指南列表或 vscode-extension-samples 存储库中找到所有示例和指南。
## 三、UX 指南
为了帮助您的扩展无缝适应 VS Code 用户界面，请参阅 UX 指南，您将在其中了解创建扩展 UI 的最佳实践以及遵循首选 VS Code 工作流程的约定。
## 四、问题报告
VS Code 用户可以使用“帮助：报告问题...”命令 （） ， workbench.action.openIssueReporter 或者在“快速打开”（workbench.action.quickOpen） 中键入问题，然后选择已安装的扩展来报告问题。这为用户提供了一致的体验，以报告核心产品或已安装的扩展的问题。

作为扩展作者，您可以将扩展集成到 Help： Report Issue...Issue Reporter 流中，而不是提供单独的 Issue Reporter 命令。此集成还允许您在用户报告问题时附加任何其他信息。

要集成到问题报告器流程中，您需要提供自定义命令和问题/报告器菜单贡献点。此自定义命令将调用 openIssueReporter。

package.json 中贡献的命令和菜单示例（请参阅添加菜单贡献和命令的贡献点）：
```js
"commands": [
    {
        "command": "extension.myCommand",
        "title": "Report Issue"
    }
],
    "menus": {
        "issue/reporter": [
            {
                "command": "extension.myCommand"
            }
        ]
    }
```

我们要求以前在命令面板中提供 workbench.action.openIssueReporter 命令的扩展开始使用这个新的问题报告流程。
## 五、测试和发布
本节包括可帮助您开发高质量 VS Code 扩展的主题。例如，您可以学习
- 如何为扩展添加集成测试
- 如何将扩展发布到 VS Code Marketplace
- 如何为扩展设置持续集成