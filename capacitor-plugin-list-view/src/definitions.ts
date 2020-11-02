declare module '@capacitor/core' {
  interface PluginRegistry {
    ListView: ListViewPlugin;
  }
}

export interface ListViewPlugin {
  present(options: { items: string[] }): void;
}
