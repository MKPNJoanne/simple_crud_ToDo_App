import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: any = [];
  task: string = "";
  comment: string = ""; // Added property for task comments

  ngOnInit(): void {
    this.GetAll();
  }

  Add() {
    let obj = {
      TaskName: this.task,
      IsComplete: false,
      Comment: this.comment // Include the comment property
    };
    this.list.push(obj);
    this.Save();
    this.task = '';
    this.comment = ''; // Clear comment after adding task
  }

  ChangeStatus(index: number, currentValue: boolean) {
    if (this.list.length > index) {
      let obj = this.list[index];
      if (obj != null && typeof obj != "undefined") {
        obj.IsComplete = !currentValue;
        this.list[index] = obj;
        this.Save();
      }
    }
  }

  Delete(index: number) {
    if (this.list.length > index) {
      this.list.splice(index, 1);
      this.Save();
    }
  }
  Edit(index: number) {
    if (this.list.length > index) {
      let taskToEdit = this.list[index];
      this.task = taskToEdit.TaskName;
      this.comment = taskToEdit.Comment;
    
    }
  }
  DeleteAll() {
    this.list = [];
    this.Save();
  }

  Save() {
    localStorage.setItem("todo", JSON.stringify(this.list));
  }

  GetAll() {
    let value = localStorage.getItem("todo");
    if (value != '' && value != null && typeof value != "undefined") {
      this.list = JSON.parse(value!);
    }
  }
}
