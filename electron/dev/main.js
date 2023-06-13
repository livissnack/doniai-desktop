const { app, Menu, Tray, BrowserWindow, shell, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')

let appTray = null
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:8080`
    : path.join('file://', __dirname, 'index.html')

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    icon: path.join(__dirname, 'img/icon.ico'),
    width: 1200,
    height: 812,
    transparent: true,
    frame: false,
    thickFrame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
  })

  win.setMenu(null)
  // 并且为你的应用加载index.html
  win.loadURL(winURL)

  // 打开开发者工具
  // win.webContents.openDevTools()

  ipcMain.on('window-min', () => {
    win.minimize()
  })

  ipcMain.on('window-max', () => {
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  })

  ipcMain.on('window-close', () => {
    console.log('do close')
    win.hide()
  })

  ipcMain.on('window-change-size', () => {
    win.setSize(1200, 812)
  })

  ipcMain.on('download', (event, { payload }) => {
    let fileStr = payload.saveStr
    dialog.showSaveDialog({
      title: '保存文件'
    }).then(result => {
      console.log(result);
      fs.writeFileSync(`${result.filePath}`,fileStr);
    }).catch(err => {
      console.log(err);
    })
  })

  if (process.platform === 'win32') {
    //设置托盘图标和菜单
    let trayMenuTemplate = [
      {
        label: "✔️ 打开",
        click: () => {
          win.show();
        },
      },
      {
        label: "开发者工具",
        click: () => {
          win.webContents.openDevTools();
        },
      },
      {
        label: "帮助",
        submenu: [
          { label: "更新..." },
          {
            label: "关于...",
            click: async () => {
              let jumpUrl ="https://github.com/livissnack";
              await shell.openExternal(jumpUrl);
            },
          },
        ],
      },
      { type: "separator" },
      {
        label: "❌ 退出",
        click: () => {
          app.quit();
          app.quit();
        },
      },
    ];
    
    //系统托盘图标
    appTray = new Tray(path.join(__dirname, 'img/icon.ico'))
    //图标的上下文菜单
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
    //设置此托盘图标的悬停提示内容
    appTray.setToolTip("问鼎");
    //设置此图标的上下文菜单
    appTray.setContextMenu(contextMenu)
    //单击右下角小图标显示应用左键
    appTray.on('click', () => {
      win.show()
    })
    appTray.on('double-click', () => {
      if (win) {
        win.restore()
        win.show()
      }
    })
    //右键
    appTray.on('right-click', () => {
      appTray.popUpContextMenu(trayMenuTemplate)
    })
  }
}

// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

//当所有窗口都被关闭后退出
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 您可以把应用程序其他的流程写在在此文件中
// 代码 也可以拆分成几个文件，然后用 require 导入。
