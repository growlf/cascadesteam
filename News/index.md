---
layout: page
title: "News"
---

%% DATAVIEW_PUBLISHER: start
```dataview
TABLE join(sort(rows.file.link), " | ") as Documents
FLATTEN regexreplace(file.folder, ".*/", "") as lastPart
WHERE contains(file.folder, this.file.folder)
GROUP BY lastPart as Folder
SORT lastPart
```
%%

| Folder | Documents                                                                                                                                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| News   | [[News/2023-05-09.md\|2023-05-09]] \| [[News/2023-10-11.md\|2023-10-11]] \| [[News/2025-04-01.md\|2025-04-01]] \| [[News/2025-05-10.md\|2025-05-10]] \| [[News/2025-06-01.md\|2025-06-01]] \| [[News/2025-07-01.md\|2025-07-01]] \| [[News/index.md\|index]] |

%% DATAVIEW_PUBLISHER: end %%

