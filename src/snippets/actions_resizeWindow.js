const snippet = {
  title: "Resize Window Action",
  description:
    "Resize the window to a specific pixel dimension, or to fit on the screen of the specified mobile device, or just to maximise",
  code: [
    "t.resizeWindow( width, height )",
    "t.resizeWindowToFitDevice( deviceName [, options] )",
    "t.maximizeWindow( )"
  ],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  const menu = Selector('#side-menu');
    
  fixture \`My fixture\`
    .page \`http://www.example.com/\`;
    
  test('Side menu disappears on small screens', async t => {
    await t
      .resizeWindow(200, 100)
      .expect(menu.getStyleProperty('display')).eql('none');
  });
    
  test('Header is displayed on Xperia Z in portrait', async t => {
    await t
      .resizeWindowToFitDevice('Sony Xperia Z', {
        portraitOrientation: true
      })
      .expect(header.getStyleProperty('display')).notEql('none');
  });
    
  test('Side menu is displayed in full screen', async t => {
    await t
      .maximizeWindow()
      .expect(menu.visible).ok();
  });`,
  options: `{
    portraitOrientation: Boolean
    /** true for portrait - false for landscape
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/actions/resize-window.html"
};

export default snippet;
