# TOML config

TOML configuration file made available globally.

## Instructions

Create `config.toml` in working directory

```toml
# config.toml
[markdown]
  [markdown.frontmatter]
    enable = true
    keys = ["title", "description", "tags"]
```

Access TOML config file by importing `@danbys/toml-config`.

```javascript
import config from '@danbys/toml-config';
console.log(config);
```