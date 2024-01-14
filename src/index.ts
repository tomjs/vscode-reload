import { StatusBarAlignment, window, workspace } from 'vscode';

const CONFIG_POSITION = 'tomjs.reload.position';
const CONFIG_TEXT = 'tomjs.reload.text';
const CONFIG_TOOLTIP = 'tomjs.reload.tooltip';

function getConfig(key: string): string | undefined {
  return workspace.getConfiguration().get(key);
}

export function activate() {
  const position =
    getConfig(CONFIG_POSITION) === 'left' ? StatusBarAlignment.Left : StatusBarAlignment.Right;
  const statusBar = window.createStatusBarItem(position, 0);

  statusBar.text = getConfig(CONFIG_TEXT) || 'Reload';
  statusBar.tooltip = getConfig(CONFIG_TOOLTIP) || 'Reload window';
  statusBar.command = `workbench.action.reloadWindow`;

  statusBar.show();
}

export function deactivate() {}
