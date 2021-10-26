import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  public fileForm!: FormGroup;

  action:string | undefined;
  local_data:any;

  fileTypes = [
    {
      type: "PDF",
      id: "PDF"
    },
    {
      type: "jpg",
      id: "jpg"
    },
    {
      type: "pptx",
      id: "pptx"
    },
    {
      type: "xlsx",
      id: "xlsx"
    },
    {
      type: "Docx",
      id: "Docx"
    }
  ];
  selectedType: string | undefined ;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
      debugger;
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
     }

  ngOnInit(): void {
    this.fileForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z\u05D0-\u05EA]+')]),
      fileType: new FormControl(null, [ Validators.required ]),
      fileSize: new FormControl('', [Validators.required, Validators.min(0)]),
      author:new FormControl('', Validators.pattern('^[a-zA-Z\u05D0-\u05EA]+')),
      dateAuthoring:new FormControl(),
      isEncrypted:new FormControl()
    });
    //^[a-zA-Z \-\']+
  }

  doAction() {
    if (this.fileForm.valid) {
      debugger;
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
  }

  closeDialog(){
    debugger;
    this.dialogRef.close({event:'Cancel'});
  }
}
