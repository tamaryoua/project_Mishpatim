import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { Observable } from 'rxjs';
import { SendEmailService } from './send-email.service';

export interface UsersData {
  id: number;
  name:string;
  fileType:string;
  fileSize:number;
  author:string;
  dateAuthoring:Date;
  isEncrypted:boolean;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Person',fileType:'PDF',fileSize:25.36,author:'aaa',dateAuthoring:new Date("Fri Dec 08 2019 07:44:57"),isEncrypted:true},
  {id: 1560608796014, name: 'Student',fileType:'jpg',fileSize:26,author:'bbb',dateAuthoring:new Date("Fri Dec 08 2019 07:44:57"),isEncrypted:false},
  {id: 1560608787815, name: 'Cities',fileType:'pptx',fileSize:37,author:'ccc',dateAuthoring:new Date("Fri Dec 08 2019 07:44:57"),isEncrypted:false},
  {id: 1560608805101, name: 'childrens',fileType:'xlsx',fileSize:12.265,author:'ddd',dateAuthoring:new Date("Fri Dec 08 2019 07:44:57"),isEncrypted:true}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app-mishpatim';
  displayedColumns: string[] = ['id', 'name','fileType','fileSize','author','dateAuthoring','isEncrypted', 'action'];
  dataSource = ELEMENT_DATA;
  amountFV!: number;

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor(public dialog: MatDialog,private SendEmailService:SendEmailService) {this.amountFilesVolume();}

  openDialog(action: any,obj: any) {
    debugger;
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '700px',
      height:'300px',
      data:obj
    });
    dialogRef.afterClosed().subscribe((result: { event: string; data: any; }) => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }
      if(result.data.fileSize>100)
      {
        this.SendEmailService.sendMail().subscribe(
          response => {
            alert("Send Email")
          });
      }
      this.amountFilesVolume();
      debugger;
    });
  }

  addRowData(row_obj: { name:string;
                        fileType:string;
                        fileSize:number;
                        author:string;
                        dateAuthoring:Date;
                        isEncrypted:boolean; }){
    debugger;
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name,
      author:row_obj.author,
      dateAuthoring:row_obj.dateAuthoring,
      fileSize:row_obj.fileSize,
      fileType:row_obj.fileType,
      isEncrypted:row_obj.isEncrypted
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj: {  id: number; name: string;fileType:string;
                            fileSize:number;
                            author:string;
                            dateAuthoring:Date;
                            isEncrypted:boolean; }){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.fileType=row_obj.fileType;
        value.fileSize=row_obj.fileSize;
        value.dateAuthoring=row_obj.dateAuthoring;
        value.author=row_obj.author;
        value.isEncrypted=row_obj.isEncrypted;
      }
      //this.amountFilesVolume();
      return true;
    });
  }
  amountFilesVolume()
  {
    let amount=0;
    debugger;
    ELEMENT_DATA.forEach(element => {
      amount+=element.fileSize;
     });
     this.amountFV=amount;
  }
 
  
}
