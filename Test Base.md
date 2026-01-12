This should be new/advanced uses for `base`s
```base
filters:
  and:
    - file.name != this.file.name
views:
  - type: table
    name: Table
    filters:
      and:
        - file.folder == this.file.folder
    order:
      - file.name
      - file.basename
      - file.ctime

```
