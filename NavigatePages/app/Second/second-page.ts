
import { EventData, Frame, Label, Page, TextField } from '@nativescript/core'
import { MyData } from '~/MyData';

var txtWriteToMain: TextField;
var txtFromMain: Label;
var data: MyData;
var page: Page;

export function navigatingTo(args: EventData) 
{
  page = <Page>args.object
  txtFromMain = <Label>page.getViewById("txtFromMain");
  txtWriteToMain = <TextField>page.getViewById("txtWriteToMain");

  data = <MyData>page.navigationContext.myData;
  txtFromMain.text = data.forward; 
}

export function onGoMain(args: EventData)
{
    data.backward = txtWriteToMain.text;
    //page.frame.goBack();
    Frame.goBack();
    //Hej
}

