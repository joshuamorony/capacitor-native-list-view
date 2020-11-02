import { WebPlugin } from '@capacitor/core';
import { ListViewPlugin } from './definitions';

export class ListViewWeb extends WebPlugin implements ListViewPlugin {
  constructor() {
    super({
      name: 'ListView',
      platforms: ['web'],
    });
  }

  present(options: { items: string[] }): void {
    console.log('PRESENT', options);
  }
}

const ListView = new ListViewWeb();

export { ListView };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ListView);
