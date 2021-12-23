<h1>🧘‍♀️ Projeto - SaúdeA+ 🧘‍♂️</h1>

> <h2>📝 Using environment variables</h2>

Create `.env` or `ormconfig.env` in the project root (near `package.json`). It should have the following content:

```ini
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = postgres
TYPEORM_PASSWORD = postgres
TYPEORM_DATABASE = saudeamais
TYPEORM_PORT = 5432
TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations
TYPEORM_ENTITIES = src/entities/*.ts
TYPEORM_ENTITIES_DIR = src/entities
```
<p>Project - Commands to use in yarn:</p>

```ini
yarn typeorm migration:generate -- -n  CreateTables or 
yarn typeorm migration:create -n CreateTable
yarn typeorm migration:run
yarn typeorm migration:revert
yarn dev
```