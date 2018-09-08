import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DocTableDataSource } from './doc-table-datasource';

@Component({
  selector: 'app-doc-table',
  templateUrl: './doc-table.component.html',
  styleUrls: ['./doc-table.component.css']
})
export class DocTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DocTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DocTableDataSource(this.paginator, this.sort);
  }
}
