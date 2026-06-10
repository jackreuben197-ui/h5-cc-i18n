# @silenthill/h5-cc-i18n

H5 游戏国际化单例包，支持 zh-CN / zh-TW / en / pt 四种语言。

## 安装

安装后 `import`/`require` 使用的包名是 `@silenthill/h5-cc-i18n`。

```bash
npm install git+ssh://git@github.com:guysoup027/h5-cc-i18n.git
```

更新：

```bash
npm update @silenthill/h5-cc-i18n
# 或者重新安装
npm install git+ssh://git@github.com:guysoup027/h5-cc-i18n.git
```

## 使用方式

### 方式一：CDN 分离（推荐，打包体积 ~1KB）

runtime 部署在 CDN，业务代码只引入 proxy，翻译数据不参与项目打包。

```html
<!-- 页面顶部加载 runtime -->
<script src="https://your-cdn/h5-cc-i18n.min.js"></script>
```

```ts
// ESM
import i18n from '@silenthill/h5-cc-i18n'

i18n.get('error0')           // '操作成功'
i18n.getAllLocales()         // ['en', 'pt', 'zh-TW', 'zh-CN']
i18n.currentLocale           // 'zh-CN'

i18n.setLocale('en')
i18n.get('error0')           // 'Success'
```

```js
// CommonJS
const i18n = require('@silenthill/h5-cc-i18n').default
i18n.get('error0')
```

### 方式二：直接打包（runtime 随项目打包，~2MB）

```ts
// ESM
import i18n from '@silenthill/h5-cc-i18n/runtime'
```

```js
// CommonJS
const i18n = require('@silenthill/h5-cc-i18n/runtime').default
```

## API

`i18n` 是一个单例对象，所有方法直接调用。

### i18n.getAllLocales()

返回所有可用的语言代码。

```ts
i18n.getAllLocales(): string[]
// → ['en', 'pt', 'zh-TW', 'zh-CN']
```

### i18n.setLocale(locale)

切换当前语言。

```ts
i18n.setLocale('en')
```

### i18n.currentLocale

获取当前语言代码（属性）。

```ts
i18n.currentLocale  // → 'zh-CN'
```

### i18n.get(key, defaultValue?)

根据 key 获取翻译文本。如果 key 不存在或对应翻译为空，返回 `defaultValue`（如果提供），否则返回 key 本身。

```ts
i18n.get('error0')              // → '操作成功'
i18n.get('NOT_EXIST')           // → 'NOT_EXIST'
i18n.get('NOT_EXIST', '--')     // → '--'
```

## 语言代码

| 语言 | 代码 | 常量 |
|------|------|------|
| 简体中文 | `zh-CN` | `i18n.LANG_ZH_CN` |
| 繁体中文 | `zh-TW` | `i18n.LANG_ZH_TW` |
| 英语 | `en` | `i18n.LANG_EN` |
| 葡萄牙语 | `pt` | `i18n.LANG_PT` |

默认语言为 `zh-CN`。

```ts
i18n.setLocale(i18n.LANG_EN)   // 用常量代替硬编码字符串
```

## 开发

```bash
# 构建所有产物
npm run build

# 构建流程：对齐语言文件 → 生成内嵌数据 → 构建 proxy + runtime
```
