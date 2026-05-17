# ViewComponent

```jsx
const thisFilePath = dc.resolvePath("dist/D.q.searchquery.component.v1.md");
const componentRootPath = thisFilePath.substring(0, thisFilePath.lastIndexOf('/dist'));

const AppModule = await dc.require(componentRootPath + "/src/App.jsx");
const { View } = await AppModule({ folderPath: componentRootPath, dc });

return { View };
```
