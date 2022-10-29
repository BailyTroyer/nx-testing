## Getting Started Steps

Source: https://nx.dev/getting-started/package-based-repo-tutorial

### 1. Create the repo with npx

```console
$ npx create-nx-workspace@latest nx-2 --packageManager=pnpm

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Choose your style                     · package-based
✔ Enable distributed caching to make your CI faster · No
...
```

### 2. Install project wide packages

```console
$ pnpm i typescript -D -w
```

### 3. Setup Lerna

Source: https://lerna.js.org/docs/lerna-and-nx

```console
$ npx lerna init
```

Source: https://lerna.js.org/docs/recipes/using-pnpm-with-lerna

1. Update `"npmClient": "pnpm"` and `"useWorkspaces": true` in `lerna.json`
2. Update `pnpm-workspace.yaml` + remove `packages` property in `lerna.json`
3. Run `pnpm install`
4. Update `lerna` version to v6 [(better integration with NX)](https://github.com/lerna/lerna/releases/tag/v6.0.0)
