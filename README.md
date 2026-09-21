# 科技領域教材教法投石車教案設計

這是一個以 GitHub Pages 發布的單頁靜態教材網站，內容整理自 `Source` 資料夾中的投石車教案、課程架構圖、學習單與評量表。

## 本地預覽

在專案根目錄啟動靜態伺服器，例如：

```powershell
py -m http.server 4173 --directory dist
```

再開啟 `http://localhost:4173/`。

## 目錄

- `Source/`：原始教案與教材資源，保留原檔，不直接修改。
- `dist/`：可公開發布的靜態網站與教材附件。
- `.github/workflows/pages.yml`：推送至 `main` 後發布 GitHub Pages。
- `.openai/hosting.json`：標示靜態網站輸出目錄。
