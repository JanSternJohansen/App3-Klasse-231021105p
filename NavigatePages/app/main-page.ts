
import { EventData, Frame, Label, NavigatedData, Page, TextField } from '@nativescript/core'
import { MyData } from './MyData'

var page: Page;
var data: MyData;
var txtFromSecond: Label;
var txtWriteToSecond: TextField;

export function navigatingTo(args: NavigatedData) {
  page = <Page>args.object

  txtFromSecond = <Label>page.getViewById("txtFromSecond");
  txtWriteToSecond = <TextField>page.getViewById("txtWriteToSecond");

  if(!args.isBackNavigation)
  {
    data = new MyData();

  }
  else
  {
    txtFromSecond.text = data.backward;
  }  
}

export function onGoSecond(args: EventData)
{
    data.forward = txtWriteToSecond.text;

    var navigationOptions =
    {
      moduleName : './Second/second-page',
      context : 
      {
        myData: data,
        fisk: "Torsk"
      }
    }
    //page.frame.navigate(navigationOptions);
    Frame.topmost().navigate(navigationOptions);

}