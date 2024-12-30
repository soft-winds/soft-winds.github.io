---
title: use-file
category:
  - js
tag:
  - hooks
---

## 介绍

`use-file` 用于处理文件上传和下载。它提供了一些方便的方法来处理文件，包括上传文件、下载文件、获取文件信息等。

## 代码

```js
import request from "@/utils/request";
import { message } from "ant-design-vue";
import { ref } from "vue";
// 导出文件
export const useExportFile = () => {
  const loading = ref(false);
  return {
    exportRun: ({ url, params, data, method = "post", fileName }) => {
      loading.value = true;
      request({ url, method, params, data, responseType: "blob" })
        .then((file) => {
          // a标签下载并删除
          const a = document.createElement("a");
          const blob = new Blob([file], {
            type: "application/vnd.ms-excel",
          });
          const objectUrl = URL.createObjectURL(blob);
          a.href = objectUrl;
          a.download = fileName;
          a.click();
          URL.revokeObjectURL(objectUrl);
          a.remove();
          loading.value = false;
        })
        .finally(() => {
          message.success("下载完成");
          loading.value = false;
        });
    },
    fileLoading: loading,
  };
};
// 导入文件
export const useUploadFile = () => {
  const loading = ref(false);
  return {
    uploadRun: ({ url, params, fdata, method = "post", success }) => {
      // 导入文件
      // 创建input file
      const input = document.createElement("input");
      input.type = "file";
      input.click();
      input.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        if (fdata) {
          for (const key in fdata) {
            data.append(key, fdata[key]);
          }
        }
        loading.value = true;
        request({
          url,
          method,
          params,
          data,
          headers: { "content-type": "multipart/form-data" },
        })
          .then(({ httpCode, message: msg }) => {
            if (httpCode === 200) {
              message.success(msg || "导入成功");
              success(true);
            }
          })
          .finally(() => {
            // 删除input
            input.remove();
            loading.value = false;
          });
      });
    },
    uploadLoading: loading,
  };
};
```

## 使用

```vue
<template>
  <div>
    <a-button :loading="fileLoading" @click="exportRun('/api/export')">导出</a-button>
    <a-button :loading="uploadLoading" @click="uploadRun('/api/import')">导入</a-button>
  </div>
</template>

<script setup>
import { useExportFile, useUploadFile } from "@/hooks/use-file";
const { exportRun, fileLoading } = useExportFile();
const { uploadRun, uploadLoading } = useUploadFile();
</script>
</script>
```
