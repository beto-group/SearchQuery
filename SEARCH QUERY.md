```datacorejsx
const currentFilePath = dc.useCurrentPath();
const folderPath = currentFilePath ? currentFilePath.substring(0, currentFilePath.lastIndexOf("/")) : "";
const AppModule = await dc.require(folderPath + "/src/App.jsx");
const { View } = await AppModule({ folderPath, dc });
return <View />;
```
