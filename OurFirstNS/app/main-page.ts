import { Button, EventData, Label, Page, TextField } from '@nativescript/core'

var txtWrite: TextField
var txtShow: Label
var btnCancel: Button

export function navigatingTo(args: EventData) 
{
  const page: Page = <Page>args.object

  txtWrite = <TextField>page.getViewById("txtWrite");
  txtShow = <Label>page.getViewById("txtShow");

  btnCancel = <Button>page.getViewById("btnCancel");
  

  btnCancel.on('tap', (args: EventData) => {

    txtShow.text = "Der blev trykket Cancel2";
  })

  btnCancel.addEventListener('tap', function(data: EventData){

    txtWrite.text = "Der blev trykket Cancel1";
  })

}

export function onTap(args: EventData)
{
  var btnTap: Button = <Button>args.object;

  var page: Page = btnTap.page;
  btnTap.parent.page.frame
  

  btnTap.text = "Der blev trykket på mig"
  txtShow.text = txtWrite.text;
}
