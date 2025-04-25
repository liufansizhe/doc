# 概述
VS Code 在构建时考虑了可***扩展性***。从 UI 到编辑体验，VS Code 的几乎每个部分都可以通过扩展 API 进行自定义和增强。事实上，VS Code 的许多核心功能都是作为扩展构建的，并使用相同的扩展 API。
本文档介绍：
- 如何构建、运行、调试、测试和发布扩展
- 如何利用 VS Code 丰富的扩展 API
- 在何处查找指南和代码示例以帮助您入门
- 遵循我们的 UX 指南了解最佳实践

代码示例可在 [Microsoft/vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples) 中找到。   
如果您正在寻找已发布的扩展，请前往 [VS Code 扩展市场](https://marketplace.visualstudio.com/vscode)。
## 一、扩展可以做什么？
-  **主题**：使用颜色或文件图标主题更改 VS Code 的外观。
- **扩展工作台**：在UI中添加自定义组件和视图。
- **Webview 指南**：创建 Webview 以显示使用 HTML/CSS/JS 构建的自定义网页。
- **语言扩展概述**：支持新的编程语言。
- **调试扩展指导**：支持调试特定运行时。

如果您想更全面地了解扩展 API，请参阅扩展功能概述页面。扩展指南概述还包括一个代码示例和指南列表，用于说明各种扩展 API 的用法。
## 二、如何构建扩展？
构建一个扩展可能需要大量的时间和精力。以下是文档的每个部分可以为您提供的帮助：
- **开始文档**：使用 Hello World 示例构建扩展的基本概念。
- **扩展功能**：将 VS Code 的庞大 API 分解为更小的类别，并为您指出更详细的主题。
- **扩展指南**：说明 VS Code 扩展 API 的特定用法的指南和代码示例。
- **UX 指南**：展示了在扩展中提供出色用户体验的最佳实践。
- **语言扩展**：通过指南和代码示例说明了如何添加对编程语言的支持。
- **测试和发布**：有关各种扩展开发主题（如测试和发布扩展）的深入指南。
- **高级主题**：介绍了高级概念，例如扩展主机、支持远程开发和 GitHub Codespaces 以及建议的 API。
- **参考资料**：包含有关 VS Code API、贡献点和许多其他主题的详尽参考。
## 三、新增了什么？
VS Code 每月更新一次，这也适用于扩展 API。每个月都会推出新功能和 API，以增加 VS Code 扩展的功能和范围。   
要及时了解扩展 API，您可以查看每月发行说明，其中有专门的部分涵盖：   
- **扩展创作**：了解最新版本中提供了哪些新的扩展 API。
- **建议的扩展 API**：查看即将推出的 API 并提供反馈。
## 四、如何寻求帮助？
如果您对扩展开发有疑问，请尝试通过以下方式提问：
- VS Code 讨论：GitHub 社区，用于讨论 VS Code 的扩展平台、提出问题、帮助社区的其他成员并获得答案。
- tack Overflow：有数千个问题被标记为 vscode-extensions，其中超过一半的问题已经有了答案。搜索您的问题、提出问题，或通过回答 VS Code 扩展开发问题来帮助您的开发人员同行！
- VS Code Dev Slack：面向扩展开发人员的公共聊天室。VS Code 团队成员经常加入对话。

要提供有关文档的反馈，请在 [Microsoft/vscode-docs](https://github.com/microsoft/vscode-docs/issues)创建新问题。如果您有找不到答案的扩展问题，或者 VS Code 扩展 API 存在问题，请在 [Microsoft/vscode](https://github.com/microsoft/vscode/issues) 上打开新问题。