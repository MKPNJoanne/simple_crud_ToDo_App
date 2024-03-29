import { Component, OnInit } from '@angular/core';
import { MotivationalService } from './motivational.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  motivationalData: any[] = [];
  selectedMotivation: any = {};

  

  list: any = [];
  task: string = "";
  comment: string = ""; 
  today: Date = new Date();

  constructor(private motivationalService: MotivationalService) {}

    ngOnInit(): void {
    this.motivationalData = this.motivationalService.getMotivationalData();
    this.getRandomMotivation();

    this.GetAll();

    setInterval(() => {
      this.getRandomMotivation();
    }, 10000);
  }

  getRandomMotivation(): void {
    const randomIndex = Math.floor(Math.random() * this.motivationalData.length);
    this.selectedMotivation = this.motivationalData[randomIndex];
  }
  
  Add() {
    let obj = {
      TaskName: this.task,
      IsComplete: false,
      Comment: this.comment 
    };
    this.list.push(obj);
    this.Save();
    this.task = '';
    this.comment = ''; 
    this.getRandomMotivation(); 
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
