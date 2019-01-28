import { Component, OnInit } from '@angular/core';
import { HiveListItem } from '../models/hive-list-item';
import { HiveService } from '../services/hive.service';

@Component({
  selector: 'app-hive-list',
  templateUrl: './hive-list.component.html',
  styleUrls: ['./hive-list.component.css']
})
export class HiveListComponent implements OnInit {

  hives: HiveListItem[];

  constructor(private hiveService: HiveService) { }

  ngOnInit() {
    this.getHives();
  }

  getHives() {
    this.hiveService.getHives().subscribe(h => this.hives = h);
  }

  onDelete(hiveId: number) {
    this.setStatus(hiveId, true);
  }

  onUndelete(hiveId: number) {
    this.setStatus(hiveId, false);
  }

  private setStatus(hiveId: number, status: boolean){
    var hive = this.hives.find(h => h.id == hiveId);
    this.hiveService.setHiveStatus(hiveId, status).subscribe(() => hive.isDeleted = status);
  }
}
