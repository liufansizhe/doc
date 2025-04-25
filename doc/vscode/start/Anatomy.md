# 扩展刨析
在上一个主题中，您能够运行基本扩展。它在后台是如何工作的？   
Hello World 扩展执行 3 项作：
1. 注册 onCommandActivation Event： onCommand:helloworld.helloWorld ，以便在用户运行 Hello World 命令时激活该扩展。
>注意：从 VS Code 1.74.0 开始，在 package.json 的 commands 部分中声明的命令会在调用时自动激活扩展，而无需在 activationEvents 中显式输入 onCommand。
2. 使用 contributes.commands贡献点使命令 Hello World 在命令面板中可用，并将其绑定到命令 ID helloworld.helloWorld。
3. 使用 commands.registerCommandVS Code API 将函数绑定到已注册的命令 ID helloworld.helloWorld。

了解这三个概念对于在 VS Code 中编写扩展至关重要：
1. Activation Events：扩展变为活动状态的事件。
2. 贡献点：您在 package.json扩展清单中为扩展 VS Code 所做的静态声明。
3. VS Code API：可以在扩展代码中调用的一组 JavaScript API。

通常，您的扩展将结合使用贡献点和 VS Code API 来扩展 VS Code 的功能。扩展功能概述主题可帮助您为扩展找到合适的贡献点和 VS Code API。

让我们仔细看看 Hello World 示例的源代码，看看这些概念如何应用于它。

## 一、扩展文件结构
```js
.
├── .vscode
│   ├── launch.json     // Config for launching and debugging the extension
│   └── tasks.json      // Config for build task that compiles TypeScript
├── .gitignore          // Ignore build output and node_modules
├── README.md           // Readable description of your extension's functionality
├── src
│   └── extension.ts    // Extension source code
├── package.json        // Extension manifest
├── tsconfig.json       // TypeScript configuration
```
您可以阅读有关配置文件的更多信息：
- 用于配置 VS Code 调试的 launch.json
- 用于定义 VS Code 任务的 tasks.json
- tsconfig.json查阅 TypeScript 手册

但是，让我们专注于 package.json 和 extension.ts，它们对于理解 Hello World 扩展至关重要。
## 二、扩展清单
每个 VS Code 扩展都必须有一个 package.json 作为其扩展清单。该package.json包含Node.js字段（如 scripts 和 devDependencies）和 VS Code 特定字段（如 publisher、activationEvents 和 contributes）。您可以在 扩展清单参考 中找到所有 VS Code 特定字段的描述。以下是一些最重要的字段：
- `name`和`publisher`：VS Code 使用 `<publisher>.<name>` 作为扩展的唯一 ID。例如，Hello World 示例的 ID vscode-samples.helloworld-sample 为 .VS Code 使用该 ID 来唯一标识您的扩展。
- `main`：扩展入口点。
- `activationEvents` 和 `contributes`：激活事件和贡献点。
- `engines.vscode`：指定扩展所依赖的 VS Code API 的最低版本。

```js
{
  "name": "helloworld-sample",
  "displayName": "helloworld-sample",
  "description": "HelloWorld example for VS Code",
  "version": "0.0.1",
  "publisher": "vscode-samples",
  "repository": "https://github.com/microsoft/vscode-extension-samples/helloworld-sample",
  "engines": {
    "vscode": "^1.51.0"
  },
  "categories": ["Other"],
  "activationEvents": [],
  "main": "./out/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "helloworld.helloWorld",
        "title": "Hello World"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./"
  },
  "devDependencies": {
    "@types/node": "^8.10.25",
    "@types/vscode": "^1.51.0",
    "tslint": "^5.16.0",
    "typescript": "^3.4.5"
  }
}
```
>注意：如果您的扩展面向 1.74 之前的 VS Code 版本，则必须在 activationEvents 中明确列出 onCommand:helloworld.helloWorld 。
## 三、扩展名条目文件
扩展入口文件导出两个功能，`activate` 和 `deactivate`。`activate` 在您注册的 Activation Event 发生时执行。`Deactivate` 让您有机会在扩展被停用之前进行清理。对于许多扩展，可能不需要显式清理，并且可以删除 `deactivate` 方法。但是，如果扩展需要在 VS Code 关闭或禁用或卸载时执行作，则此方法。

VS Code 扩展 API 在 @types/vscode 类型定义中声明。`vscode` 类型定义的版本由 `package.json` 中 `engines.vscode` 字段中的值控制。`vscode` 类型在代码中提供 IntelliSense、Go to Definition 和其他 TypeScript 语言功能。
```js
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "helloworld-sample" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World!');
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
```