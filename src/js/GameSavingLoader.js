import read from "./reader";
import json from "./parser";
export default class GameSavingLoader {
  static async load() {
      let data = await read();
      let value = await json(data);
      return JSON.parse(value);
    }
}