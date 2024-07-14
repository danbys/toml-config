import fs from 'fs';
import path from 'path';
import toml from 'toml';
const configPath = path.resolve(process.cwd(), './config.toml');
const config = fs.readFileSync(configPath, 'utf-8');
export default toml.parse(config);